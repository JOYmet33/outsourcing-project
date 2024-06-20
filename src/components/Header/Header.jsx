import { useNavigate } from "react-router-dom";
import { IconMyPage } from "../Icon/Icons/IconMyPage";
import { Button, ButtonContainer, HeaderBar, HeaderLink, IconContainer, Img, LogoContainer } from "./Header.styled";
import SearchContainer from "./SearchContainer/SearchContainer";
import useUserStore from "../../../store/userStore";
import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const navigate = useNavigate();
  const { isSignIn, setSignIn, setSignOut } = useUserStore((state) => state);

  const handleSignIn = () => {
    navigate("/sign_in");
  };

  const handleSignOut = () => {
    async function signOut() {
      const { error } = await supabase.auth.signOut();
      setSignOut();
    }
    signOut();
  };

  const moveToMyPage = () => {
    navigate("/mypage");
  };

  useEffect(() => {
    const checkSignIn = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSignIn();
      } else {
        setSignOut();
      }
    };
    checkSignIn();
  }, []);

  const checkLogin = async () => {
    const session = await supabase.auth.getSession();
    const user = session.data.session?.user;

    if (user) {
      const { data, error } = await supabase.from("users").select("image, nickname").eq("id", user.id).single();

      if (error) {
        console.error("Error fetching user info:", error);
      } else {
        setUserImage(data.image);
        setUserName(data.nickname);
      }
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <HeaderBar>
      <LogoContainer>
        <HeaderLink to="/">Camparoo</HeaderLink>
      </LogoContainer>
      <SearchContainer />
      <ButtonContainer>
        <IconContainer onClick={moveToMyPage}>
          {userImage ? <Img src={userImage} /> : <IconMyPage src={IconMyPage} />}
          <div>{userName ? `${userName}님` : ""}</div>
        </IconContainer>
        {isSignIn ? <Button onClick={handleSignOut}>로그아웃</Button> : <Button onClick={handleSignIn}>로그인</Button>}
      </ButtonContainer>
    </HeaderBar>
  );
};

export default Header;
