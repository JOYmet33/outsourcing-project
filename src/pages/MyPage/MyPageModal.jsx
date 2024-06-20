import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { updateReview, getReviewByUserId } from "../../lib/api/review.js";
import supabase from "../../supabaseClient.js";

const MyPageModal = ({ isOpen, closeModal, reviewId }) => {
  const [formData, setFormData] = useState({ content: "", image: null });
  const [errors, setErrors] = useState({ content: "", image: "" });
  const [user, setUser] = useState(null);
  const [userReview, setUserReview] = useState("");

  useEffect(() => {
    const getUserReview = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      const userReview = await getReviewByUserId(user.id);
      setUserReview(userReview);
      // console.log(userReview);
      //필터
      const review = userReview.find((review) => review.id === reviewId);
      if (review) {
        setFormData({ ...formData, content: review.content });
      }
    };
    if (isOpen) {
      getUserReview();
    }
  }, [isOpen, reviewId]);

  // console.log(formData);
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
    const { content, image } = formData;

    let errorMessages = {};
    if (!content) errorMessages.content = "내용을 입력해주세요.";
    if (!image) errorMessages.image = "이미지를 업로드해주세요.";

    if (Object.keys(errorMessages).length) {
      setErrors(errorMessages);
      return;
    }

    const fileExt = image.name.split(".").pop();
    const filePath = `${Date.now()}.${fileExt}`;

    let imageUrl = "";
    if (image) {
      const { data, error } = await supabase.storage.from("camparoo").upload(`review/${filePath}`, image);
      if (error) {
        console.error("이미지 업로드 오류:", error);
        return;
      }

      imageUrl = await supabase.storage.from("camparoo").getPublicUrl(data.path).data.publicUrl;
    }

    const newReview = { content, image: imageUrl, user_id: user.id };
    const result = await updateReview(newReview, reviewId);

    if (true) {
      closeModal();
      window.location.reload();
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
                <ModalFileInput type="file" name="image" accept="image/*" onChange={handleChange} />
                {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                <ModalSubmitButton type="submit">수정하기</ModalSubmitButton>
              </ModalForm>
            </ContentInner>
          </ModalContent>
        </div>
        <Screen onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
const Screen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: zoom-out;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100%;
`;

const ContentInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 30px;
  width: 400px;
  border-radius: 6px;
  background-color: #fff;
`;

const ButtonModalClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  z-index: 100;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  color: #a9a9a9;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #efefef;
  box-sizing: border-box;
  font-size: 12px;
  border: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

export const ModalFileInput = styled.input`
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #efefef;
  box-sizing: border-box;
  font-size: 12px;
  border: none;

  &[type="file"]::file-selector-button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  background-color: #efefef;
  box-sizing: border-box;
  border: none;
  resize: unset;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

export const ModalSubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--color-gray-normal);
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const shake = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;
export const ErrorMessage = styled.p`
  padding-left: 10px;
  color: red;
  font-size: 12px;
  animation: ${shake} 0.2s linear 3;
`;

export default MyPageModal;
