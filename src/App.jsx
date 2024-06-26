import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";

import GlobalStyle from "./style/GlobalStyle";

import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import Mypage from "./pages/MyPage/MyPage";

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
