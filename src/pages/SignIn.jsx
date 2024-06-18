import { useState } from "react";
import {
  SignContainer,
  SignH1,
  SignForm,
  SignInput,
  SignButton,
  SignGoogleButton,
} from "../components/SignIn/SgnIn.styled";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignContainer>
      <SignH1>로그인</SignH1>
      <SignForm onSubmit={() => {}}>
        <SignInput type="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
        <SignInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignButton>이메일로 로그인하기</SignButton>
      </SignForm>
      또는 다른 이메일 계정으로 로그인하기
      <hr />
      <SignGoogleButton>Google</SignGoogleButton>
      <p>
        계정이 없으신가요? <Link to="/sign_up">회원가입</Link>
      </p>
    </SignContainer>
  );
};

export default SignIn;
