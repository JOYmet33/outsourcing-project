import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { haversineDistance } from "../../utils/distance";
import useCampsiteStore from "../../../store/campsiteStore";
import campsiteMarker from "../../assets/img/marker_campsite.svg";
import { DisPlayAddress, ResetBtn, Wrapper, MapContainerWrapper, Popup } from "./MapContainer.styled";
import SideBarToggleBtn from "./SideBarToggleBtn/SideBarToggleBtn";
import SideBar from "../SideBar/SideBar";
import campsiteApi from "../../lib/api/campsite.api";

const API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;
const seoulCityHallCoordinates = { lat: 37.5665, lng: 126.978 };

const MapContainer = () => {
  const { error: kakaoError } = useKakaoLoader({ appkey: API_KEY });

  const keyword = useCampsiteStore((state) => state.keyword);
  const setKeyword = useCampsiteStore((state) => state.setKeyword);
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const openSideBar = useCampsiteStore((state) => state.openSideBar);
  const closeSideBar = useCampsiteStore((state) => state.closeSideBar);
  const [selectedItem, setSelectedItem] = useState(null);
  const [position, setPosition] = useState(seoulCityHallCoordinates);
  const [showList, setShowList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const mapRef = useRef();

  const [address, setAddress] = useState("");
  const [viewPosition, setViewPosition] = useState(seoulCityHallCoordinates);

  const { data = [], error: queryError } = useQuery({
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
    setShowList(!showList);
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
      <MapContainerWrapper isSideBarOpened={isSideBarOpened}>
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
              src: "",
              size: {
                width: 15,
                height: 15,
              },
            }}
          />
          {data.map((site, index) => (
            <MapMarker
              key={index}
              position={{
                lat: parseFloat(site.mapY),
                lng: parseFloat(site.mapX),
              }}
              title={site.facltNm}
              image={{
                src: campsiteMarker,
                size: {
                  width: 35,
                  height: 35,
                },
              }}
              onClick={() => handleMarkerClick(site)}
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
      </MapContainerWrapper>
      <SideBar
        selectedSite={selectedItem}
        data={data}
        handleMarkerClick={handleMarkerClick}
        showList={showList}
        setShowList={setShowList}
      />
    </Wrapper>
  );
};

export default MapContainer;
