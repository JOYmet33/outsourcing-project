import Modal from "../../Modal/Modal.jsx";
import { useEffect, useState } from "react";
import { getReview } from "../../../lib/api/review.js";
import {
  ReviewButton,
  ReviewContainer,
  ReviewImageWrapper,
  ReviewItem,
  ReviewItemContent,
  ReviewItemList,
  ReviewNickName,
} from "./SideBarReviews.styled.jsx";
import useModal from "../../../hooks/useModal.js";

const SideBarReviews = ({ campsiteId }) => {
  const { isOpen, openModal, closeModal, modalContent } = useModal();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!campsiteId) return;

    const fetchReviews = async () => {
      try {
        const data = await getReview(campsiteId);
        setReviews(data);
      } catch (error) {
        setError("리뷰 데이터를 불러오는 데 실패했습니다.");
        console.error(error);
      }
    };
    fetchReviews();
  }, [campsiteId]);

  return (
    <ReviewContainer>
      <Modal isOpen={isOpen} closeModal={closeModal} campsiteId={campsiteId}>
        {modalContent}
      </Modal>
      <ReviewButton onClick={() => openModal()}>리뷰쓰기</ReviewButton>
      <ReviewItemList>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewNickName>작성자 : {review.users.nickname}</ReviewNickName>
            <ReviewImageWrapper>
              <img src={review.image} alt="review-img" />
            </ReviewImageWrapper>
            <ReviewItemContent>{review.content}</ReviewItemContent>
          </ReviewItem>
        ))}
      </ReviewItemList>
    </ReviewContainer>
  );
};

export default SideBarReviews;
