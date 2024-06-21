import InfoItem from "../InfoItem/InfoItem";
import { Wrapper } from "./SideBarHome.styled";

const SideBarHome = ({ selectedSite }) => {
  return (
    <Wrapper>
      <InfoItem label="운영 기간" value={selectedSite.operPdCl} />
      <InfoItem label="운영 요일" value={selectedSite.operDeCl} />
      <InfoItem label="대표 전화번호" value={selectedSite.tel} />
      <InfoItem label="홈페이지" value={selectedSite.homepage} />
      <InfoItem label="부대시설" value={selectedSite.sbrsCl} />
      <InfoItem label="체험 프로그램 여부" value={selectedSite.exprnProgrmAt} />
      <InfoItem label="체험 프로그램명" value={selectedSite.exprnProgrm} />
    </Wrapper>
  );
};

export default SideBarHome;
