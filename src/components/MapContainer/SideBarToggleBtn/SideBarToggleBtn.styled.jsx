import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 120px;
  width: 22px;
  border: none;
  cursor: pointer;
  background-color: var(--color-gray-dark);
  color: var(--color-white);
  font-size: 1rem;
  font-weight: bold;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 9;
  &:hover {
    filter: brightness(1.25);
  }
`;
