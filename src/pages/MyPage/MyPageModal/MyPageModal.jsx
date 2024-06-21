import { useEffect, useState } from "react";
import { updateReview, getReviewByUserId } from "../../../lib/api/review.js";
import supabase from "../../../supabaseClient.js";
import {
  Container,
  ModalContainer,
  ModalContent,
  Screen,
  ContentInner,
  ButtonModalClose,
  ModalForm,
  ModalInput,
  ModalFileInput,
  ModalTextarea,
  ModalSubmitButton,
  ErrorMessage,
  ModalImage,
} from "../MyPageModal/MyPageModal.styled.jsx";

const MyPageModal = ({ isOpen, closeModal, reviewId }) => {
  const [formData, setFormData] = useState({ content: "", image: null });
  const [errors, setErrors] = useState({ content: "", image: "" });
  const [user, setUser] = useState(null);
  const [userReview, setUserReview] = useState("");
  const [imgSrc, setImgSrc] = useState(""); // 이미지 미리보기

  useEffect(() => {
    const getUserReview = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      const userReview = await getReviewByUserId(user.id);
      setUserReview(userReview);

      const review = userReview.find((review) => review.id === reviewId);
      if (review) {
        setFormData({ ...formData, content: review.content });
        setImgSrc(review.image);
      }
    };
    if (isOpen) {
      getUserReview();
    }
  }, [isOpen, reviewId]);

  if (!isOpen) return null;

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: files ? files[0] : value,
  //   });
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];
      setImgSrc(URL.createObjectURL(file));
    }
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

    let imageUrl = "";
    if (image) {
      const fileExt = image.name.split(".").pop();
      const filePath = `${Date.now()}.${fileExt}`;

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
      alert("수정이 완료 되었습니다!");
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
                <>이미지</>
                <ModalImage src={imgSrc} />
                <>리뷰</>
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

export default MyPageModal;
