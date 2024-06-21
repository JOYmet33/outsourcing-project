import { useRef, useState } from "react";
import MapContainer from "../../components/MapContainer/MapContainer";
import SideBar from "../../components/SideBar/SideBar";
import { Wrapper } from "./Home.styled";
import useCampsiteStore from "../../store/campsiteStore";
import { useKakaoLoader } from "react-kakao-maps-sdk";

const Home = () => {
  const API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

  const { error: kakaoError } = useKakaoLoader({ appkey: API_KEY });
  const mapRef = useRef();

  const setSelectedSite = useCampsiteStore((state) => state.setSelectedSite);
  const openSideBar = useCampsiteStore((state) => state.openSideBar);

  const seoulCityHallCoordinates = { lat: 37.5665, lng: 126.978 };
  const [position, setPosition] = useState(seoulCityHallCoordinates);
  const [centerPosition, setCenterPosition] = useState(seoulCityHallCoordinates);

  const [showPopup, setShowPopup] = useState(false);

  const resetPosition = () => {
    setPosition(seoulCityHallCoordinates);
    setCenterPosition(seoulCityHallCoordinates);
  };

  const handleMarkerClick = (site) => {
    setCenterPosition({ lat: site.mapY, lng: site.mapX });
    setSelectedSite(site);
    setShowPopup(true);
    openSideBar();

    if (mapRef.current) {
      const { kakao } = window;
      if (kakao && kakao.maps) {
        const offsetY = 0.005;
        mapRef.current.setCenter(new kakao.maps.LatLng(parseFloat(site.mapY) - offsetY, parseFloat(site.mapX)));
        mapRef.current.setLevel(6);
      }
    }
  };

  return (
    <Wrapper>
      <SideBar position={position} onClick={handleMarkerClick} />
      <MapContainer
        kakaoError={kakaoError}
        onClick={handleMarkerClick}
        position={position}
        centerPosition={centerPosition}
        setPosition={setPosition}
        setCenterPosition={setCenterPosition}
        resetPosition={resetPosition}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </Wrapper>
  );
};
export default Home;
