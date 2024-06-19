import InfoItem from "../InfoItem/InfoItem";
import { Wrapper } from "../SideBarHome/SideBarHome.styled";

const SideBarAmenities = ({ selectedSite }) => {
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
