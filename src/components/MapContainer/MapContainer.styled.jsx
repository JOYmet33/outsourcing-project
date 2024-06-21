import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  right: 10px;
  top: 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  border-radius: 6px;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;
