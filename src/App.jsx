import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "../style/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
