import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import supabase from "../../supabaseClient";

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
  margin-top: 10px;
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
  flex-direction: column;
  align-items: center;
`;

const ReviewItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
`;

const Mypage = () => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nickname, setNickname] = useState("");
  const [userData, setUserData] = useState(null);
  const [userReviews, setUserReviews] = useState([]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameEdit = () => {
    setIsEditingNickname(true);
  };

  const handleNicknameSave = async () => {
    const { data, error } = await supabase.from("users").update({ nickname }).eq("id", userData.id);

    if (error) {
      console.log("Error updating nickname:", error);
    } else {
      setUserData((prev) => ({ ...prev, nickname }));
      setIsEditingNickname(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = "d5e63f18-6baa-4498-a9f0-6722a4d0abd9";

      const { data: userData, error: userError } = await supabase.from("users").select("*").eq("id", userId).single();

      if (userError) {
        console.log("Error fetching user data:", userError);
      } else {
        setUserData(userData);
        setNickname(userData.nickname);
      }

      const { data: reviewsData, error: reviewsError } = await supabase
        .from("review")
        .select("*")
        .eq("user_id", userId);

      if (reviewsError) {
        console.log("Error fetching reviews:", reviewsError);
      } else {
        setUserReviews(reviewsData);
      }
    };

    fetchData();
  }, []);

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
              <ProfileLabel>닉네임: </ProfileLabel>
              {isEditingNickname ? (
                <input type="text" value={nickname} onChange={handleNicknameChange} />
              ) : (
                <span>{userData?.nickname || "Loading..."}</span>
              )}
              <EditButton onClick={isEditingNickname ? handleNicknameSave : handleNicknameEdit}>
                {isEditingNickname ? "저장" : "수정"}
              </EditButton>
            </div>
            <div>
              <ProfileLabel>이메일:</ProfileLabel> <span>{userData?.email || "Loading..."}</span>
            </div>
          </ProfileInfo>
        </ProfileContainer>
      </Section>
      <ReviewsContainer>
        <div>내가 쓴 글</div>
        {userReviews.map((review) => (
          <ReviewItem key={review.id}>
            <div>{review.content}</div>
            <div>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </div>
          </ReviewItem>
        ))}
      </ReviewsContainer>
    </PageContainer>
  );
};

export default Mypage;
