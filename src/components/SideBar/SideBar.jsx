import SideBarTabs from "./SideBarTabs/SideBarTabs";
import FirstImage from "./FirstImage/FirstImage";
import CampSiteName from "./CampSiteName/CampSiteName";

import { useState } from "react";
import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import SideBarHome from "./SideBarHome/SideBarHome";
import SideBarReviews from "./SideBarReviews/SideBarReviews";
import SideBarAmenities from "./SideBarAmenities/SideBarAmenities";
import { Wrapper } from "./SideBar.styled";
import useCampsiteStore from "../../../store/campsiteStore";

const sideBarComponents = {
  SideBarHome,
  SideBarAmenities,
  SideBarReviews,
};

const initialState = SIDE_BAR_TABS[0];

const SideBar = ({ selectedSite }) => {
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const [activeTab, setActiveTab] = useState(initialState);
  const handleTapClick = (tap) => {
    setActiveTab(tap);
  };

  const ActiveComponent = sideBarComponents[`SideBar${activeTab}`];

  if (selectedSite && isSideBarOpened)
    return (
      <Wrapper>
        <CampSiteName name={selectedSite.facltNm} />
        <FirstImage img={selectedSite.firstImageUrl} />
        <SideBarTabs onClick={handleTapClick} />
        {ActiveComponent && <ActiveComponent selectedSite={selectedSite} />}
      </Wrapper>
    );
};

export default SideBar;
