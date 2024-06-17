import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import styled from "styled-components";
import campsiteApi from "../lib/api/campsite.api";

const API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const MapContainer = ({ onClick }) => {
  const { loading: kakaoLoading, error: kakaoError } = useKakaoLoader({
    appkey: API_KEY,
  });
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  const {
    data,
    error: queryError,
    isLoading,
  } = useQuery({
    queryKey: ["campingSites", { mapX: position.lng, mapY: position.lat }],
    queryFn: () => campsiteApi.getListWithLocation({ mapX: position.lng, mapY: position.lat }),
    enabled: !!position.lat && !!position.lng,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (kakaoLoading || isLoading) return <div>Loading...</div>;
  if (kakaoError || queryError) return <div>Error loading data</div>;

  return (
    <Wrapper>
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
        level={3}
      >
        {data?.map((site, index) => (
          <MapMarker
            onClick={() => onClick(site)}
            key={index}
            position={{
              lat: parseFloat(site.mapY),
              lng: parseFloat(site.mapX),
            }}
            title={site.facltNm}
          />
        ))}
      </Map>
    </Wrapper>
  );
};

export default MapContainer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-light);
`;
