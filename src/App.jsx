import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle";
import HomeLayout from "./components/layouts/HomeLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/MyPage/MyPage";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
