import Modal from "../../Modal/Modal.jsx";
import useModal from "../../../hooks/useModal.js";
import { useEffect, useState } from "react";
import { getReview } from "../../../lib/api/review.js";
import {
  ReviewButton,
  ReviewContainer,
  ReviewImageWrapper,
  ReviewItem,
  ReviewItemContent,
  ReviewItemList, ReviewNickName,
} from "./SideBarReviews.styled.jsx";
import { IconEdit } from "../../Icon/Icons/IconEdit.jsx";
import Icon from "../../Icon/Icon.jsx";

const SideBarReviews = () => {
  const { isOpen, openModal, closeModal, modalContent } = useModal();
  const [reviews, setReviews] = useState([]);

  // 컴포넌트가 마운트될 때 리뷰 데이터를 가져옵니다.
  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReview();
      if (data) {
        setReviews(data);
      }
    };
    fetchReviews();
  }, []);

  return (
    <ReviewContainer>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
      <ReviewButton onClick={() => openModal()}>
        리뷰쓰기
      </ReviewButton>
      <ReviewItemList>
        {reviews.map(review => (
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
