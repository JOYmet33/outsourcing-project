import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 200px auto;
  gap: 10px;

  position: relative;
  width: 400px;
  height: 372px;
`;

export const SignH1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;

  margin-bottom: 30px;

  color: #000000;
`;

export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
`;

export const SignInput = styled.input`
  padding: 0% 16px;

  width: 400px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const SignButton = styled.button`
  padding: 0px 16px;
  gap: 8px;

  width: 100%;
  height: 40px;

  background: #000000;
  border-radius: 8px;

  color: white;
`;

export const SignGoogleButton = styled.button`
  width: 100%;
  height: 40px;

  background: #d9d9d9;
  border-radius: 8px;
`;
