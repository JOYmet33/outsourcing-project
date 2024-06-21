import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  margin: 0 20px;
  gap: 5px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid var(--color-gray-dark);
  border-radius: 4px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-gray-dark);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
