import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DisPlayAddress = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 1000;
  padding: 10px;
`;

export const ResetBtn = styled.button`
  right: 0;
  position: absolute;
  z-index: 9;
`;
