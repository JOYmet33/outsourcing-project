import { useState } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { Wrapper } from "./Home.styled";

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
