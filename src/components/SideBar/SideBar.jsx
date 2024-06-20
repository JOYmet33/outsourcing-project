import { useState } from "react";
import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import SideBarHome from "./SideBarHome/SideBarHome";
import SideBarReviews from "./SideBarReviews/SideBarReviews";
import SideBarAmenities from "./SideBarAmenities/SideBarAmenities";
import { Wrapper } from "./SideBar.styled";
import useCampsiteStore from "../../store/campsiteStore";
import CampSiteDetail from "./CampSiteDetail/CampSiteDetail";
import CampSiteList from "./CampSiteList/CampSiteList";
import useCampsitesQuery from "../../hooks/useCampsitesQuery";

const sideBarComponents = {
  SideBarHome,
  SideBarAmenities,
  SideBarReviews,
};

const initialState = SIDE_BAR_TABS[0];

const SideBar = ({ position, onClick }) => {
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const selectedSite = useCampsiteStore((state) => state.selectedSite);
  const [activeTab, setActiveTab] = useState(initialState);
  console.log(selectedSite);
  const handleTapClick = (tap) => {
    setActiveTab(tap);
  };
  const { data, queryError } = useCampsitesQuery(position);

  const ActiveComponent = sideBarComponents[`SideBar${activeTab}`];
  if (isSideBarOpened)
    return (
      <Wrapper>
        {selectedSite && (
          <CampSiteDetail
            selectedSite={selectedSite}
            activeTab={activeTab}
            ActiveComponent={ActiveComponent}
            onClick={handleTapClick}
          />
        )}
        <CampSiteList data={data} handleMarkerClick={onClick} />
      </Wrapper>
    );
};

export default SideBar;
