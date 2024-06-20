import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { addReview } from "../../lib/api/review.js";
import supabase from "../../supabaseClient.js";
import {
  ButtonModalClose,
  Container, ContentInner,
  ErrorMessage,
  ModalContainer, ModalContent,
  ModalFileInput, ModalForm, ModalScreen,
  ModalSubmitButton, ModalTextarea,
} from "./Modal.styled.jsx";

const Modal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({ link: '', content: '', image: null });
  const [errors, setErrors] = useState({ link: '', content: '', image: '' });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {content, image } = formData;

    // fomData가 존재 하는지??
    // formData 를 어떤 형태로 업로드 할것인지?

    let errorMessages = {};
    if (!content) errorMessages.content = '내용을 입력해주세요.';
    if (!image) errorMessages.image = '이미지를 업로드해주세요.';

    if (Object.keys(errorMessages).length) {
      setErrors(errorMessages);
      return;
    }

    // 파일 이름 안전하게 변환
    let safeFileName = image.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-\.]/g, '');
    let imageUrl = '';
    if (image) {
      const { data, error } = await supabase.storage
        .from('camparoo')
        .upload(`review/${safeFileName}`, image);

      if (error) {
        console.error('이미지 업로드 오류:', error);
        return;
      }

      const { publicURL, error: urlError } = supabase.storage
        .from('camparoo')
        .getPublicUrl(`review/${safeFileName}`);

      if (urlError) {
        console.error('이미지 URL 생성 오류:', urlError);
        return;
      }

      imageUrl = publicURL;
    }


    // 리뷰를 Supabase에 삽입
    const newReview = {content, image_url: imageUrl ,user_id: user.id};
    const result = await addReview(newReview);

    if (result) {
      closeModal();
    }
  };

  return (
    <Container>
      <ModalContainer>
        <ButtonModalClose onClick={closeModal}>X</ButtonModalClose>
        <div>
          <ModalContent>
            <ContentInner>
              <ModalForm onSubmit={handleSubmit}>
                <ModalTextarea
                  placeholder="내용을 입력해주세요."
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
                {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
                <ModalFileInput
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
                {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                <ModalSubmitButton type="submit">등록하기</ModalSubmitButton>
              </ModalForm>
            </ContentInner>
          </ModalContent>
        </div>
        <ModalScreen onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
};



export default Modal