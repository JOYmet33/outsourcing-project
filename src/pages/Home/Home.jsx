import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { Wrapper } from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
      <SideBar />
      <MapContainer />
    </Wrapper>
  );
};

export default Home;
