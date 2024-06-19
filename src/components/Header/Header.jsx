import { useNavigate } from "react-router-dom";
import { Button, ButtonContainer, HeaderBar, HeaderLink, LogoContainer } from "./Header.styled";
import SearchContainer from "./SearchContainer/SearchContainer";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/sign_in");
  };

  return (
    <HeaderBar>
      <LogoContainer>
        <HeaderLink to="/">Camparoo</HeaderLink>
      </LogoContainer>
      <SearchContainer />
      <ButtonContainer>
        <Button onClick={handleLogin}>로그인</Button>
      </ButtonContainer>
    </HeaderBar>
  );
};

export default Header;
