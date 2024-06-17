import styled from "styled-components";
import MapContainer from "../components/MapContainer";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  return (
    <Wrapper>
      <SideBar />
      <MapContainer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  display: flex;
  height: 100vh;
`;
