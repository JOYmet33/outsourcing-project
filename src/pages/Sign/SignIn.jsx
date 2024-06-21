import { useState } from "react";
import { SignContainer, SignH1, SignForm, SignInput, SignButton, SignGoogleButton } from "./Sign.styled";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleSignIn = async () => {
    if (!email) {
      alert("이메일 주소를 채워주세요.");
      return;
    }
    if (!validateEmail(email)) {
      alert("이메일 형식으로 이메일 주소를 입력해주세요.");
      setEmail("");
      return;
    }
    if (!password) {
      alert("비밀번호를 채워주세요.");
      return;
    }
    if (password.length < 6) {
      alert("비밀번호는 6글자 이상이어야 합니다.");
      setPassword("");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (!data.user) {
        console.log(error);
        alert("회원정보가 일치하지 않습니다.");
        setEmail("");
        setPassword("");
        return;
      } else {
        const user_nickname = data.user.user_metadata.nickname;
        alert(`${user_nickname}님 환영합니다.`);
        navigate("/");
      }
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
