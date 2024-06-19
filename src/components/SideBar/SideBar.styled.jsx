import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  z-index: 8;
  display: flex;
  height: 100%;
  transition: all 250ms ease-in;
  animation: ${slideOut} 250ms forwards;

  ${(props) =>
    props.$isSideBarOpened &&
    css`
      animation: ${slideIn} 250ms forwards;
    `}
`;
