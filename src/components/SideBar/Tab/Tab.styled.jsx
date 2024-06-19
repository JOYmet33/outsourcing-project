import styled from "styled-components";

export const StyledTab = styled.button`
  background-color: transparent;
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 500;
  opacity: ${({ $isActive }) => $isActive || "0.6"};
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
