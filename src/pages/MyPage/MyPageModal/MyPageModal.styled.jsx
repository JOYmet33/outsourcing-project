import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
export const Screen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: zoom-out;
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100%;
`;

export const ContentInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 30px;
  width: 400px;
  border-radius: 6px;
  background-color: #fff;
`;

export const ButtonModalClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  z-index: 100;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  color: #a9a9a9;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #efefef;
  box-sizing: border-box;
  font-size: 12px;
  border: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;
export const ModalFileInput = styled.input`
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #efefef;
  box-sizing: border-box;
  font-size: 12px;
  border: none;

  &[type="file"]::file-selector-button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  background-color: #efefef;
  box-sizing: border-box;
  border: none;
  resize: unset;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

export const ModalSubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--color-gray-normal);
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const shake = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;
export const ErrorMessage = styled.p`
  padding-left: 10px;
  color: red;
  font-size: 12px;
  animation: ${shake} 0.2s linear 3;
`;
