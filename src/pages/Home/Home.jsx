import { useState } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { Wrapper } from "./Home.styled";
import useCampsiteStore from "../../store/campsiteStore";

const Home = () => {
  const setSelectedSite = useCampsiteStore((state) => state.setSelectedSite);

  const handleMarkerClick = (site) => setSelectedSite(site);

  return (
    <Wrapper>
      <SideBar />
      <MapContainer onClick={handleMarkerClick} />
    </Wrapper>
  );
};

export default Home;
