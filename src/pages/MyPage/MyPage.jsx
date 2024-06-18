import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const PageContainer = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
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
  /* display: flex; */
  /* justify-content: flex-start; */
  width: 50%;
  margin-top: 10px;
`;

const ProfileLabel = styled.div`
  display: flex;
  /* border: 1px solid #000; */
  padding: 5px;
  margin: 5px;
`;

const ProfileLabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewsContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
`;

const Mypage = () => {
  return (
    <PageContainer>
      <Header />
      <Section>
        <Title>user 01</Title>
        <ProfileContainer>
          <Image
            src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fbasic600%2F528%2FB005280039.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832"
            alt="이미지 설명"
          />

          <div>
            <ProfileLabel>닉네임:</ProfileLabel> <span>펭귄</span>
          </div>
          <div>
            <ProfileLabel>이메일:</ProfileLabel> <span>tnfusrltk12@naver.com</span>
          </div>
        </ProfileContainer>
      </Section>
      <ReviewsContainer>내가 쓴 글</ReviewsContainer>
    </PageContainer>
  );
};

export default Mypage;
