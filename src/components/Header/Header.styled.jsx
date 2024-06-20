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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  height: 39px;
  svg {
    height: 100%;
    width: auto;
  }
`;

export const Img = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 60%;
  cursor: pointer;
`;
