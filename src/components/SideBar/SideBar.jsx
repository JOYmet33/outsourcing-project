import { useEffect, useState } from "react";
import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import SideBarHome from "./SideBarHome/SideBarHome";
import SideBarReviews from "./SideBarReviews/SideBarReviews";
import SideBarAmenities from "./SideBarAmenities/SideBarAmenities";
import { Wrapper } from "./SideBar.styled";
import useCampsiteStore from "../../../store/campsiteStore";
import CampSiteDetail from "./CampSiteDetail/CampSiteDetail";
import CampSiteList from "./CampSiteList/CampSiteList";

const sideBarComponents = {
  SideBarHome,
  SideBarAmenities,
  SideBarReviews,
};

const initialState = SIDE_BAR_TABS[0];

const SideBar = ({ selectedSite }) => {
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const [activeTab, setActiveTab] = useState(initialState);
  const [shouldRender, setShouldRender] = useState(isSideBarOpened);

  const handleTapClick = (tap) => {
    setActiveTab(tap);
  };

  useEffect(() => {
    let timer;
    if (isSideBarOpened) {
      setShouldRender(true);
    } else {
      timer = setTimeout(() => setShouldRender(false), 250);
    }
    return () => clearTimeout(timer);
  }, [isSideBarOpened]);

  const ActiveComponent = sideBarComponents[`SideBar${activeTab}`];
  if (!shouldRender) return null;

  return (
    <Wrapper $isSideBarOpened={isSideBarOpened}>
      {selectedSite && (
        <CampSiteDetail
          selectedSite={selectedSite}
          activeTab={activeTab}
          ActiveComponent={ActiveComponent}
          onClick={handleTapClick}
        />
      )}
      <CampSiteList />
    </Wrapper>
  );
};

export default SideBar;
