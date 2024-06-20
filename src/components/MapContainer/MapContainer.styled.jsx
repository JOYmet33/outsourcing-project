import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .map {
    width: 100%;
    position: relative;
  }
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
