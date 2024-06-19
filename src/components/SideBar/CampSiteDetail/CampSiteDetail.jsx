import CampSiteName from "../CampSiteName/CampSiteName";
import FirstImage from "../FirstImage/FirstImage";
import SideBarTabs from "../SideBarTabs/SideBarTabs";
import { Wrapper } from "./CampSiteDetail.styled";

const CampSiteDetail = ({ selectedSite, activeTab, ActiveComponent, onClick }) => {
  console.log(activeTab);
  return (
    <Wrapper>
      <CampSiteName name={selectedSite.facltNm} />
      <FirstImage img={selectedSite.firstImageUrl} />
      <SideBarTabs onClick={onClick} activeTab={activeTab} />
      {ActiveComponent && <ActiveComponent selectedSite={selectedSite} />}
    </Wrapper>
  );
};

export default CampSiteDetail;
