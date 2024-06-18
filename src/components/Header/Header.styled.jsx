import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-gray-normal);
  padding: 20px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: var(--color-black-light);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  gap: 20px;
`;

export const SearchContainer = styled.div`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-dark);
  text-decoration: none;
  font-size: 18px;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: var(--color-gray-dark);
  text-decoration: none;
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
