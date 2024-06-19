import InfoItem from "../InfoItem/InfoItem";
import { Wrapper } from "../SideBarHome/SideBarHome.styled";

const SideBarAmenities = ({ selectedSite }) => {
  // sbrsCl 전기 장작판매 온수 운동시설등
  // brazierCl 화로대
  // posblFcltyCl 주변이용가능 시설:운동장, 강/물놀이, 농어촌 체험시설
  // toiletCo 화장실 개수
  // swrmCo 샤워실 개수
  // wtrplCo 개수대 개수

  return (
    <Wrapper>
      <InfoItem label="주변 이용가능 시설" value={selectedSite.posblFcltyCl} />
      <InfoItem label="화로대" value={selectedSite.brazierCl} />
      <InfoItem label="화장실 개수" value={selectedSite.toiletCo} />
      <InfoItem label="샤워실 개수" value={selectedSite.swrmCo} />
      <InfoItem label="개수대 개수" value={selectedSite.wtrplCo} />
    </Wrapper>
  );
};

export default SideBarAmenities;
