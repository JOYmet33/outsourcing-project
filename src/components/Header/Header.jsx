import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";
import { IconMyPage } from "../Icon/Icons/IconMyPage";
import { Button, ButtonContainer, HeaderBar, HeaderLink, IconContainer, Img, LogoContainer } from "./Header.styled";
import SearchContainer from "./SearchContainer/SearchContainer";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  async function checkLogin() {
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
  }
  useEffect(() => {
    checkLogin();
  }, []);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/sign_in");
  };

  const moveToMyPage = () => {
    navigate("/mypage");
  };

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
        <Button onClick={handleLogin}>로그인</Button>
      </ButtonContainer>
    </HeaderBar>
  );
};

export default Header;
