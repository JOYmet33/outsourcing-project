import { useState } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { SideBarToggleBtn, Wrapper } from "./Home.styled";
import useCampsiteStore from "../../../store/campsiteStore";

const Home = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const handleMarkerClick = (site) => setSelectedSite(site);
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const openSideBar = useCampsiteStore((state) => state.openSideBar);
  const closeSideBar = useCampsiteStore((state) => state.closeSideBar);
  const handleToggleSideBar = () => {
    isSideBarOpened ? closeSideBar() : openSideBar();
  };
  return (
    <Wrapper>
      <SideBar selectedSite={selectedSite} />
      <SideBarToggleBtn onClick={handleToggleSideBar} />
      <MapContainer onClick={handleMarkerClick} />
    </Wrapper>
  );
};

export default Home;
