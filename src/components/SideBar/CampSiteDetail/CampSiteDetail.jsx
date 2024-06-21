import CampSiteName from "../CampSiteName/CampSiteName";
import FirstImage from "../FirstImage/FirstImage";
import SideBarTabs from "../SideBarTabs/SideBarTabs";
import { Wrapper } from "./CampSiteDetail.styled";
import SideBarReviews from "../SideBarReviews/SideBarReviews.jsx";

const CampSiteDetail = ({ selectedSite, activeTab, ActiveComponent, onClick }) => {
  return (
    <Wrapper>
      <CampSiteName name={selectedSite.facltNm} />
      <FirstImage img={selectedSite.firstImageUrl} />
      <SideBarTabs onClick={onClick} activeTab={activeTab} />
      {ActiveComponent && <ActiveComponent selectedSite={selectedSite} campsiteId={selectedSite.contentId} />}
    </Wrapper>
  );
};

export default CampSiteDetail;
