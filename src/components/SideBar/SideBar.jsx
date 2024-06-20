import { useState, useCallback, useMemo } from "react";
import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import SideBarHome from "./SideBarHome/SideBarHome";
import SideBarReviews from "./SideBarReviews/SideBarReviews";
import SideBarAmenities from "./SideBarAmenities/SideBarAmenities";
import { Wrapper } from "./SideBar.styled";
import useCampsiteStore from "../../../store/campsiteStore";
import CampSiteDetail from "./CampSiteDetail/CampSiteDetail";
import CampSiteList from "./CampSiteList/CampSiteList";
import React, { memo } from "react";

const sideBarComponents = {
  SideBarHome,
  SideBarAmenities,
  SideBarReviews,
};

const initialState = SIDE_BAR_TABS[0];

const MemoizedCampSiteList = memo(CampSiteList);

const SideBar = ({ selectedSite, data, handleMarkerClick, showList, setShowList }) => {
  const isSideBarOpened = useCampsiteStore((state) => state.isSideBarOpened);
  const [activeTab, setActiveTab] = useState(initialState);

  const handleTapClick = useCallback((tap) => {
    setActiveTab(tap);
  }, []);

  const ActiveComponent = useMemo(() => sideBarComponents[`SideBar${activeTab}`], [activeTab]);

  if (!isSideBarOpened) return null;

  return (
    <Wrapper>
      {showList && (
        <MemoizedCampSiteList
          data={data}
          handleMarkerClick={handleMarkerClick}
          showList={showList}
          setShowList={setShowList}
        />
      )}
      {selectedSite && (
        <CampSiteDetail
          selectedSite={selectedSite}
          activeTab={activeTab}
          ActiveComponent={ActiveComponent}
          onClick={handleTapClick}
        />
      )}
    </Wrapper>
  );
};

export default SideBar;
