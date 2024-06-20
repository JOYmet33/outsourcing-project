import { useState } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { Wrapper } from "./Home.styled";
import useCampsiteStore from "../../store/campsiteStore";

const Home = () => {
  const setSelectedSite = useCampsiteStore((state) => state.setSelectedSite);
  const openSideBar = useCampsiteStore((state) => state.openSideBar);
  const handleMarkerClick = (site) => {
    setSelectedSite(site);
    setShowPopup(true);
    setShowList(true);
    openSideBar();
  };

  const seoulCityHallCoordinates = { lat: 37.5665, lng: 126.978 };
  const [position, setPosition] = useState(seoulCityHallCoordinates);

  const [showList, setShowList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const resetPosition = () => setPosition(seoulCityHallCoordinates);

  return (
    <Wrapper>
      <SideBar position={position} showList={showList} setShowList={setShowList} />
      <MapContainer
        onClick={handleMarkerClick}
        position={position}
        setPosition={setPosition}
        resetPosition={resetPosition}
        showList={showList}
        showPopup={showPopup}
        setShowList={setShowList}
        setShowPopup={setShowPopup}
      />
    </Wrapper>
  );
};
export default Home;
