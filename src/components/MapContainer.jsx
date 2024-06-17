import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import styled from "styled-components";

const API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;
console.log("Kakao API Key:", API_KEY);

const MapContainer = () => {
  const [loading, error] = useKakaoLoader({
    appkey: API_KEY,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading Kakao Maps</div>;
  return (
    <Wrapper>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={3} // 지도의 확대 레벨
      />
    </Wrapper>
  );
};

export default MapContainer;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-gray-light);
`;
