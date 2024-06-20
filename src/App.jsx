import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
