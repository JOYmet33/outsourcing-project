import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle";
import HomeLayout from "./components/layouts/HomeLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
