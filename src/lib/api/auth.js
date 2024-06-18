import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async ({ email, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      email: email,
      password: password,
      nickname: nickname,
    });
    //accessToken 로컬스토리지에 저장하기
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 로그인
export const logIn = async ({ email, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=60m`, {
      email: email,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};
