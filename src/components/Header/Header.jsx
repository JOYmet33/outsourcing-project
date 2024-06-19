import { useNavigate } from "react-router-dom";
import { IconMyPage } from "../Icon/Icons/IconMyPage";
import { Button, ButtonContainer, HeaderBar, HeaderLink, IconContainer, LogoContainer } from "./Header.styled";
import SearchContainer from "./SearchContainer/SearchContainer";

const Header = () => {
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
          <IconMyPage src={IconMyPage} />
        </IconContainer>
        <Button onClick={handleLogin}>로그인</Button>
      </ButtonContainer>
    </HeaderBar>
  );
};

export default Header;
