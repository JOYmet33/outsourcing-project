import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const PageContainer = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  margin-right: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileInfo = styled.div`
  /* width: 50%; */
  /* margin-top: 10px; */
`;

const EditButton = styled.button`
  background-color: var(--color-gray-normal);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const ProfileLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const ReviewsContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const ReviewItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 350px;
  margin-right: 320px;
  margin-top: 13px;
`;

const Mypage = () => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nickname, setNickname] = useState("펭귄");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameEdit = () => {
    setIsEditingNickname(true);
  };

  const handleNicknameSave = () => {
    setIsEditingNickname(false);
  };

  return (
    <PageContainer>
      <Header />
      <Section>
        <ProfileContainer>
          <div>
            <Image
              src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fbasic600%2F528%2FB005280039.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832"
              alt="user 이미지"
            />
            <EditButton>수정</EditButton>
          </div>
          <ProfileInfo>
            <div>
              <ProfileLabel>닉네임:</ProfileLabel>
              {isEditingNickname ? (
                <input type="text" value={nickname} onChange={handleNicknameChange} />
              ) : (
                <span>{nickname}</span>
              )}
              <EditButton onClick={isEditingNickname ? handleNicknameSave : handleNicknameEdit}>
                {isEditingNickname ? "저장" : "수정"}
              </EditButton>
            </div>
            <div>
              <ProfileLabel>이메일:</ProfileLabel> <span>tnfusrltk12@naver.com</span>
            </div>
          </ProfileInfo>
        </ProfileContainer>
      </Section>
      <ReviewsContainer>
        <div>내가 쓴 글</div>
      </ReviewsContainer>
      <ReviewItem>
        <div>내가 쓴 리뷰 1</div>
        <div>
          <EditButton>수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </div>
      </ReviewItem>
      <ReviewItem>
        <div>내가 쓴 리뷰 2</div>
        <div>
          <EditButton>수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </div>
      </ReviewItem>
      <ReviewItem>
        <div>내가 쓴 리뷰 3</div>
        <div>
          <EditButton>수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </div>
      </ReviewItem>
      <ReviewItem>
        <div>내가 쓴 리뷰 4</div>
        <div>
          <EditButton>수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </div>
      </ReviewItem>
    </PageContainer>
  );
};

export default Mypage;
