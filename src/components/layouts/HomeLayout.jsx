import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import { Wrapper } from "./HomeLayout.styled";

const HomeLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  );
};

export default HomeLayout;
