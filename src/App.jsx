import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle";
import HeaderLayout from "./components/layouts/HeaderLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
