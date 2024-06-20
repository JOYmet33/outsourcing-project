import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import supabase from "../../supabaseClient";
import MyPageModal from "./MyPageModal/MyPageModal";
import useModal from "../../hooks/useModal.js";
import {
  PageContainer,
  Section,
  Image,
  ProfileContainer,
  ProfileInfo,
  EditButton,
  DeleteButton,
  ProfileLabel,
  ReviewsContainer,
  ReviewItem,
} from "./MyPage.styled";

const Mypage = () => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nickname, setNickname] = useState("");
  const [userData, setUserData] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [userImgSave, setUserImgSave] = useState(null);
  const [signIn, setSignIn] = useState(false);
  const { isOpen, openModal, closeModal, modalContent } = useModal();
  const [userReviewId, setUserReviewId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await supabase.auth.getSession();
      if (!session.data.session) return;

      setSignIn(true);

      const userId = session.data.session.user.id;

      const { data: userData, error: userError } = await supabase.from("users").select("*").eq("id", userId).single();
      if (userError) {
        console.log(userError.message);
      } else {
        setUserData(userData);
        setNickname(userData.nickname);
        setProfileImage(userData.image);
      }

      const { data: reviewsData, error: reviewsError } = await supabase
        .from("review")
        .select("*")
        .eq("user_id", userId);
      if (reviewsError) {
        console.log("에러", reviewsError.message);
      } else {
        setUserReviews(reviewsData);
      }
    };

    fetchData();
  }, [signIn]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameEdit = () => {
    setIsEditingNickname(true);
  };

  const handleNicknameSave = async () => {
    const { data, error } = await supabase.from("users").update({ nickname }).eq("id", userData.id);
    if (error) {
      console.error("에러", error.message);
    } else {
      setUserData((prev) => ({ ...prev, nickname }));
      setIsEditingNickname(false);
    }
  };

  const handleImgUrlSave = async (imageUrl) => {
    const { data, error } = await supabase.from("users").update({ image: imageUrl }).eq("id", userData.id);
    if (error) {
      console.error("에러", error.message);
    } else {
      setUserData((prev) => ({ ...prev, image: imageUrl }));
      setProfileImage(imageUrl);
    }
  };

  const handleImageUpload = async (file) => {
    const { data: uploadImgData, error } = await supabase.storage
      .from("camparoo")
      .upload(`profile/${userData.id}_${Date.now()}.jpg`, file);

    if (error) {
      console.error("에러", error.message);
      return;
    }

    const { data: publicImgData } = await supabase.storage.from("camparoo").getPublicUrl(uploadImgData.path);
    setProfileImage(publicImgData.publicUrl);
    setUserImgSave(publicImgData.publicUrl);
    handleImgUrlSave(publicImgData.publicUrl);
  };

  const handleReviewDelete = async (reviewId) => {
    const { error } = await supabase.from("review").delete().eq("id", reviewId);
    if (error) {
      console.error("에러", error.message);
    } else {
      setUserReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
    }
  };

  return (
    <div>
      <Header />
      <PageContainer>
        <Section>
          <ProfileContainer>
            <div>
              <Image
                src={profileImage ? profileImage : "이미지를 추가해주세요!"}
                alt={profileImage ? "프로필 이미지" : "이미지를 추가해주세요!"}
              />
              <EditButton onClick={() => document.getElementById("fileInput").click()}>이미지 수정</EditButton>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleImageUpload(e.target.files[0])}
              />
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
                <EditButton
                  onClick={() => {
                    setUserReviewId(review.id);
                    openModal(<div>리뷰탭</div>);
                  }}
                >
                  수정
                </EditButton>

                <DeleteButton onClick={() => handleReviewDelete(review.id)}>삭제</DeleteButton>
              </div>
            </ReviewItem>
          ))}
          <MyPageModal isOpen={isOpen} closeModal={closeModal} reviewId={userReviewId}>
            {modalContent}
          </MyPageModal>
        </ReviewsContainer>
      </PageContainer>
    </div>
  );
};

export default Mypage;
