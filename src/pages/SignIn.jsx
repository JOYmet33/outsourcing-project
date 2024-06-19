import { useState } from "react";
import {
  SignContainer,
  SignH1,
  SignForm,
  SignInput,
  SignButton,
  SignGoogleButton,
} from "../components/SignIn/SgnIn.styled";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    //유효성 검사
    if (email === "") {
      alert("이메일주소를 채워주세요");
    } else if (email.length > 20) {
      alert("이메일 주소가 20글자 초과되었습니다");
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log("SignIn-data >> ", data);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignContainer>
      <SignH1>로그인</SignH1>
      <SignForm>
        <SignInput type="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
        <SignInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignButton onClick={handleSignIn}>이메일로 로그인하기</SignButton>
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
