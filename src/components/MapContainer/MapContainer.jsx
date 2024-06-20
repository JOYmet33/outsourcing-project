import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import useCampsiteStore from "../../../store/campsiteStore";
import campsiteMarker from "../../assets/img/marker_campsite.svg";
import campsiteApi from "../../lib/api/campsite.api";
import { haversineDistance } from "../../utils/distance";
import CampSiteList from "../SideBar/CampSiteList/CampSiteList";
import { DisPlayAddress, Popup, ResetBtn, Wrapper } from "./MapContainer.styled";
import SideBarToggleBtn from "./SideBarToggleBtn/SideBarToggleBtn";

const API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;
const seoulCityHallCoordinates = { lat: 37.5665, lng: 126.978 };

const MapContainer = ({ onClick }) => {
  const { error: kakaoError } = useKakaoLoader({ appkey: API_KEY });

  const keyword = useCampsiteStore((state) => state.keyword);
  const setKeyword = useCampsiteStore((state) => state.setKeyword);
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const openSideBar = useCampsiteStore((state) => state.openSideBar);
  const [selectedItem, setSelectedItem] = useState(null);
  const closeSideBar = useCampsiteStore((state) => state.closeSideBar);
  const [position, setPosition] = useState(seoulCityHallCoordinates);
  const [showList, setShowList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const mapRef = useRef();

  const [address, setAddress] = useState("");
  const [viewPosition, setViewPosition] = useState(seoulCityHallCoordinates);
  const { data, error: queryError } = useQuery({
    queryKey: ["campingSites", { keyword, position }],
    queryFn: async () => {
      try {
        const data = keyword
          ? await campsiteApi.getListWithKeyword(keyword)
          : await campsiteApi.getListWithLocation({ mapX: position.lng, mapY: position.lat });

        if (data) {
          return data
            .map((item) => ({
              ...item,
              distance: parseFloat(
                haversineDistance(position, { lat: parseFloat(item.mapY), lng: parseFloat(item.mapX) }),
              ),
            }))
            .sort((a, b) => a.distance - b.distance);
        }

        return [];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    enabled: !!position.lat && !!position.lng,
  });

  const handleToggleSideBar = () => {
    isSideBarOpened ? closeSideBar() : openSideBar();
  };

  const handleReset = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newPosition = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setPosition(newPosition);
          setKeyword("");
          setViewPosition(newPosition);
          fetchAddress(newPosition.lat, newPosition.lng);
        },
        (error) => {
          console.error(error);
          setPosition(seoulCityHallCoordinates);
          setKeyword("");
        },
      );
    } else {
      console.error("이 브라우저에서는 Geolocation 이 지원되지 않습니다.");
    }
  };

  useEffect(() => {
    handleReset();
  }, []);

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }
    handleReset();
  }, [window.kakao]);

  useEffect(() => {
    fetchAddress(viewPosition.lat, viewPosition.lng);
  }, [viewPosition]);

  const handleDragEnd = (map) => {
    const center = map.getCenter();
    setViewPosition({
      lat: center.getLat(),
      lng: center.getLng(),
    });
    fetchAddress(center.getLat(), center.getLng());
  };

  const handleZoomChanged = (map) => {
    const center = map.getCenter();
    setViewPosition({
      lat: center.getLat(),
      lng: center.getLng(),
    });
    fetchAddress(center.getLat(), center.getLng());
  };

  const fetchAddress = (lat, lng) => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }
    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(lat, lng);
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      } else {
        console.error("주소를 가져오는 중 오류가 발생했습니다.", status);
        setAddress("주소를 가져오는 중 오류가 발생했습니다.");
      }
    });
  };

  const handleMarkerClick = (site) => {
    setSelectedItem(site);
    setShowPopup(true);
    setShowList(true);
    onClick(site);
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

  if (kakaoError || queryError) return <div>Error loading data: {kakaoError?.message || queryError?.message}</div>;

  return (
    <Wrapper>
      <SideBarToggleBtn isSideBarOpened={isSideBarOpened} onClick={handleToggleSideBar} />
      <ResetBtn onClick={handleReset}>이건우리집으로돌아가는버튼</ResetBtn>
      <div className="container">
        <CampSiteList data={data} handleMarkerClick={handleMarkerClick} showList={showList} setShowList={setShowList} />
        <div className="map">
          <Map
            id="map"
            center={{
              lat: position.lat,
              lng: position.lng,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
            level={6}
            onDragEnd={handleDragEnd}
            onZoomChanged={handleZoomChanged}
            ref={mapRef}
          >
            <MapMarker
              position={{
                lat: position.lat,
                lng: position.lng,
              }}
              title="현재 위치"
              image={{
                src: "data:image/png;base64,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",
                size: {
                  width: 15,
                  height: 15,
                },
              }}
            />
            {data?.map((site, index) => (
              <MapMarker
                onClick={() => handleMarkerClick(site)}
                image={{
                  src: campsiteMarker,
                  size: {
                    width: 35,
                    height: 35,
                  },
                }}
                key={index}
                position={{
                  lat: parseFloat(site.mapY),
                  lng: parseFloat(site.mapX),
                }}
                title={site.facltNm}
              >
                {showPopup && selectedItem?.contentId === site.contentId && (
                  <Popup>
                    <h2>{selectedItem.facltNm}</h2>
                    <p>{selectedItem.addr1}</p>
                    <p>{selectedItem.tel}</p>
                    <p>거리: {selectedItem.distance} km</p>
                    <button onClick={() => setShowPopup(false)}>닫기</button>
                  </Popup>
                )}
              </MapMarker>
            ))}
            <DisPlayAddress>현재 주소: {address}</DisPlayAddress>
          </Map>
        </div>
      </div>
    </Wrapper>
  );
};

export default MapContainer;
