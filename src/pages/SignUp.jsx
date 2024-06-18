import { useState } from "react";
import { SignContainer, SignH1, SignForm, SignInput, SignButton } from "../components/SignIn/SgnIn.styled";
import { register } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    // 회원가입 유효성 검사
    if (email.length < 3 || email.length > 10) {
      alert("아이디는 3글자~10글자만 가능합니다.");
      return;
    }
    if (password.length < 3 || password.length > 15) {
      alert("비밀번호는 3글자~10글자만 가능합니다.");
      return;
    }
    if (nickname.length < 3 || nickname.length > 10) {
      alert("닉네임은 3글자~10글자만 가능합니다.");
      return;
    }
    // API 호출 코드
    const response = await register({
      email: email,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/sign_in");
    }
  };

  return (
    <SignContainer>
      <SignH1>회원가입</SignH1>
      <SignForm onSubmit={handleSignUp}>
        <SignInput type="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
        <SignInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInput type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <SignButton>이메일로 회원가입하기</SignButton>
      </SignForm>
      {/* <p>
        이미 계정이 있으신가요? <a herf={`${local}/sign_in`}>로그인</a>
      </p> */}
    </SignContainer>
  );
};

export default SignUp;
