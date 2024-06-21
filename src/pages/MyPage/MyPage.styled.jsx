import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  margin-right: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  margin-top: 10px;
`;

export const EditButton = styled.button`
  background-color: var(--color-gray-normal);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

export const ProfileLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
`;

export const ReviewImage = styled.img`
  width: 90px;
  height: 90px;
`;
export const ReviewContent = styled.div`
  width: 400px;
  height: 100px;
  overflow: hidden;
  max-height: 200px;
  display: flex;
  align-items: center;
`;
