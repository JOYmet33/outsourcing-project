import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useCampsiteStore from "../../store/campsiteStore";
import campsiteMarker from "../../assets/img/marker_campsite.svg";
import userPosition from "../../assets/img/user_position.svg";
import { DisPlayAddress, ResetBtn, Wrapper } from "./MapContainer.styled";
import SideBarToggleBtn from "./SideBarToggleBtn/SideBarToggleBtn";
import useCampsitesQuery from "../../hooks/useCampsitesQuery";
import Popup from "./Popup/Popup";

const seoulCityHallCoordinates = { lat: 37.5665, lng: 126.978 };

const MapContainer = forwardRef(
  ({ onClick, position, setPosition, resetPosition, showPopup, setShowPopup, setShowList, kakaoError }, ref) => {
    console.log(position);
    const setKeyword = useCampsiteStore((state) => state.setKeyword);

    const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
    const openSideBar = useCampsiteStore((state) => state.openSideBar);
    const closeSideBar = useCampsiteStore((state) => state.closeSideBar);
    const selectedSite = useCampsiteStore((state) => state.selectedSite);
    const [address, setAddress] = useState("");
    const [viewPosition, setViewPosition] = useState(seoulCityHallCoordinates);

    const { data, queryError } = useCampsitesQuery(position);

    const handleToggleSideBar = () => {
      setShowList(true);
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
            resetPosition();
            setKeyword("");
          },
        );
      } else {
        console.error("이 브라우저에서는 Geolocation 이 지원되지 않습니다.");
      }
    };

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
      geocoder.coord2Address(coord?.getLng(), coord?.getLat(), (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setAddress(result[0].address.address_name);
        } else {
          console.error("주소를 가져오는 중 오류가 발생했습니다.", status);
          setAddress("주소를 가져오는 중 오류가 발생했습니다.");
        }
      });
    };

    if (kakaoError || queryError) return <div>Error loading data: {kakaoError?.message || queryError?.message}</div>;

    return (
      <Wrapper>
        <SideBarToggleBtn isSideBarOpened={isSideBarOpened} onClick={handleToggleSideBar} />
        <ResetBtn onClick={handleReset}>이건우리집으로돌아가는버튼</ResetBtn>
        <div className="container">
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
              ref={ref}
            >
              <MapMarker
                position={{
                  lat: position.lat,
                  lng: position.lng,
                }}
                title="현재 위치"
                image={{
                  src: userPosition,
                  size: {
                    width: 45,
                    height: 45,
                  },
                }}
              />
              {data?.map((site, index) => (
                <MapMarker
                  onClick={() => onClick(site)}
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
                  {showPopup && selectedSite?.contentId === site.contentId && (
                    <Popup setShowPopup={setShowPopup} selectedSite={selectedSite} />
                  )}
                </MapMarker>
              ))}
              <DisPlayAddress>현재 주소: {address}</DisPlayAddress>
            </Map>
          </div>
        </div>
      </Wrapper>
    );
  },
);

export default MapContainer;
