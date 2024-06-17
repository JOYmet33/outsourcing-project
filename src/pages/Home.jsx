import styled from "styled-components";
import MapContainer from "../components/MapContainer";
import SideBar from "../components/SideBar/SideBar";
import { useState } from "react";

const Home = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const handleMarkerClick = (site) => setSelectedSite(site);
  return (
    <Wrapper>
      <SideBar selectedSite={selectedSite} />
      <MapContainer onClick={handleMarkerClick} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  display: flex;
  height: 100vh;
`;
