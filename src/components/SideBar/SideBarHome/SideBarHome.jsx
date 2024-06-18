import { Wrapper } from "./SideBarHome.styled";

const SideBarHome = ({ selectedSite }) => {
  return (
    <Wrapper>
      {selectedSite.operPdCl && <p>운영 기간 {selectedSite.operPdCl}</p>}
      {selectedSite.operDeCl && <p>운영 요일 {selectedSite.operDeCl}</p>}
      {selectedSite.tel && <p>대표 전화번호 {selectedSite.tel}</p>}
      {selectedSite.homepage && <p>홈페이지 {selectedSite.homepage}</p>}
      {selectedSite.sbrsCl && <p>부대시설 {selectedSite.sbrsCl}</p>}
      {selectedSite.exprnProgrm && <p>체험 프로그램 {selectedSite.exprnProgrm}</p>}
    </Wrapper>
  );
};

export default SideBarHome;

//
