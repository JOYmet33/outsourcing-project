import styled from "styled-components";

export const ReviewButton = styled.button`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  background: #d0d0d0;
  border: 0;
  border-radius: 8px;
  color :#909090;
  font-size: 14px;
`
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
  border-bottom: 1px solid #d0d0d0;
  
  &:last-child { border-bottom: none}
`

export const ReviewImageWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  background: #999;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`

export const ReviewNickName = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`

export const ReviewItemContent = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  width: 100%;
  height: 74px;
  line-height: 1.6;
  resize: unset;
  font-size: 16px;
  color: rgb(85,85,88);
  font-weight: normal;
`