import { useState } from "react";
import { SignContainer, SignH1, SignForm, SignInput, SignButton } from "../components/SignIn/SgnIn.styled";
import { Link } from "react-router-dom";
import supabase from "../supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { nickname },
      },
    });
    console.log("supabase data >> ", data);
    if (data) {
      const { data, error } = await supabase
        .from("users")
        .insert([{ email: email, nickname: nickname }])
        .select();
    } else {
      console.error(error);
    }
    console.log("Insert >>", data);
  };

  return (
    <SignContainer>
      <SignH1>회원가입</SignH1>
      <SignForm>
        <SignInput type="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
        <SignInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInput type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <SignButton onClick={handleSignUp}>이메일로 회원가입하기</SignButton>
      </SignForm>
      <p>
        이미 계정이 있으신가요? <Link to="/sign_in">로그인</Link>
      </p>
    </SignContainer>
  );
};

export default SignUp;
