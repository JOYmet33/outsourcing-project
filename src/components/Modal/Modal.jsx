import { useState, useEffect } from "react";
import supabase from "../../supabaseClient.js";
import {
  ButtonModalClose,
  Container,
  ContentInner,
  ErrorMessage,
  ModalContainer,
  ModalContent,
  ModalFileInput,
  ModalForm,
  ModalScreen,
  ModalSubmitButton,
  ModalTextarea,
} from "./Modal.styled.jsx";
import { uploadImage } from "../../lib/api/upLoadImage.js";

const Modal = ({ isOpen, closeModal }) => {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!content || !imageFile) {
      setError("내용과 이미지를 모두 입력해주세요.");
      return;
    }

    const path = await uploadImage(imageFile);

    if (!path) {
      setError("이미지 업로드에 실패했습니다.");
      return;
    }

    const imageUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/camparoo/${path}`;

    // 사용자 정보에서 닉네임을 가져옴
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("nickname")
      .eq("id", user.id)
      .single();

    if (userError) {
      console.error("사용자 정보 가져오기 오류:", userError);
      setError("사용자 정보를 가져오는 데 실패했습니다.");
      return;
    }

    const newReview = {
      content,
      image: imageUrl,
      user_id: user.id,
      // nickname: userData.nickname,  // 사용자 닉네임 추가
    };

    const { data, error: insertError } = await supabase
      .from("review")
      .insert(newReview);

    if (insertError) {
      console.error("리뷰 저장 오류:", insertError);
      setError("리뷰 저장에 실패했습니다.");
      return;
    }

    closeModal();
  };


  return (
    <Container>
      <ModalContainer>
        <ButtonModalClose onClick={closeModal}>X</ButtonModalClose>
        <ModalContent>
          <ContentInner>
            <ModalForm onSubmit={handleSubmit}>
              <ModalTextarea
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ModalFileInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <ModalSubmitButton type="submit">등록하기</ModalSubmitButton>
            </ModalForm>
          </ContentInner>
        </ModalContent>
        <ModalScreen onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
};

export default Modal;
