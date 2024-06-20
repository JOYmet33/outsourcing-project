import Modal from "../../Modal/Modal.jsx";
import useModal from "../../../hooks/useModal.js";
import { useEffect, useState } from "react";
import { getReview } from "../../../lib/api/review.js";
import styled from "styled-components";
import { ReviewContainer, ReviewItem, ReviewItemList } from "./SideBarReviews.styled.jsx";

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
      <button onClick={() => openModal(<div>리뷰탭</div>)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
      <ReviewItemList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <div style={{width: '100%', height: '300px'}}>
              <img src={review.image} alt="review-img" />
            </div>
            <p>{review.content}</p>
          </ReviewItem>
        ))}
      </ReviewItemList>
    </ReviewContainer>
  );
};


export default SideBarReviews;
