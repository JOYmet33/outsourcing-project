import { useState } from "react";
import { Container, SearchButton, SearchInput } from "./SearchContainer.styled";
import useCampsiteStore from "../../../store/campsiteStore";

const SearchContainer = () => {
  const [text, setText] = useState("");
  const setKeyword = useCampsiteStore((state) => state.setKeyword);
  const handleChange = (e) => setText(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim().length < 2) return;
    setKeyword(text);
  };
  return (
    <Container onSubmit={handleSearch}>
      <SearchInput onChange={handleChange} value={text} type="text" placeholder="검색어를 입력하세요." />
      <SearchButton>검색</SearchButton>
    </Container>
  );
};

export default SearchContainer;
