import styled from "styled-components";
import SideBarTabs from "./SideBarTabs";
import FirstImage from "./FirstImage";
import CampSiteName from "./CampSiteName";
import { act, useState } from "react";
import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import SideBarHome from "./SideBarHome";
import SideBarReviews from "./SideBarReviews";
import SideBarAmenities from "./SideBarAmenities";

const sideBarComponents = {
  SideBarHome,
  SideBarAmenities,
  SideBarReviews,
};

const initialState = SIDE_BAR_TABS[0];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(initialState);
  const handleTapClick = (tap) => {
    setActiveTab(tap);
  };

  const ActiveComponent = sideBarComponents[`SideBar${activeTab}`];

  return (
    <Wrapper>
      <CampSiteName />
      <FirstImage />
      <SideBarTabs onClick={handleTapClick} />
      {ActiveComponent && <ActiveComponent />}
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
`;
