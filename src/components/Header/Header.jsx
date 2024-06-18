import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  HeaderBar,
  HeaderLink,
  LogoContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <HeaderBar>
      <LogoContainer>
        <HeaderLink to="/">Camparoo</HeaderLink>
      </LogoContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="검색어를 입력하세요." />
        <SearchButton>검색</SearchButton>
      </SearchContainer>
      <ButtonContainer>
        <Button onClick={handleLogin}>로그인</Button>
      </ButtonContainer>
    </HeaderBar>
  );
};

export default Header;
