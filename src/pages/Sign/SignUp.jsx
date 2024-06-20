import { useState } from "react";
import { SignContainer, SignH1, SignForm, SignInput, SignButton } from "../Sign/Sign.styled";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recheckPassword, setRecheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleSignUp = async (e) => {
    // 유효성 검사
    if (!email) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }
    if (!validateEmail(email)) {
      alert("이메일 형식으로 이메일 주소를 입력해주세요.");
      setEmail("");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (password.length < 6) {
      alert("비밀번호는 6글자 이상이어야 합니다.");
      setPassword("");
      return;
    }
    if (!recheckPassword) {
      alert("비밀번호를 확인해주세요.");
      return;
    }
    if (password !== recheckPassword) {
      alert("비밀번호와 일치하지 않습니다.");
      setRecheckPassword("");
      return;
    }
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (nickname.length < 3) {
      alert("닉네임은 3글자 이상이어야 합니다.");
      setNickname("");
      return;
    }

    e.preventDefault();

    // Authentication API
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { nickname },
      },
    });
    // 'users' Table API
    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ email: email, nickname: nickname }])
        .select();
      if (data) {
        const user_nickname = data[0].nickname;
        alert(`${user_nickname}님 가입을 축하합니다.`);
        navigate("/sign_in");
      } else {
        console.log(error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
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
        <SignInput
          type="password"
          placeholder="비밀번호 확인"
          value={recheckPassword}
          onChange={(e) => setRecheckPassword(e.target.value)}
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
