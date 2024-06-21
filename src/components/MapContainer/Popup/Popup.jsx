import { Wrapper } from "./Popup.styled";

const Popup = ({ selectedSite, setShowPopup }) => {
  return (
    <Wrapper>
      <h2>{selectedSite.facltNm}</h2>
      <p>{selectedSite.addr1}</p>
      <p>{selectedSite.tel}</p>
      <p>거리: {selectedSite.distance} km</p>
      <button onClick={() => setShowPopup(false)}>닫기</button>
    </Wrapper>
  );
};

export default Popup;
