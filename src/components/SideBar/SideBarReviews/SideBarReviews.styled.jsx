import styled from "styled-components";

export const ReviewContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ReviewItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 18px;
    color: #333;
    font-weight: normal;
  }
`