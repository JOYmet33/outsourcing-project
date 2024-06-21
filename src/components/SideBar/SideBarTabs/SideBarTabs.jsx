import { SIDE_BAR_TABS } from "../../../constants/sideBarTabConstants";
import Tab from "../Tab/Tab";
import { Wrapper } from "./SideBarTabs.styled";

const SideBarTabs = ({ onClick, activeTab }) => {
  return (
    <Wrapper>
      {SIDE_BAR_TABS.map((tap, index) => (
        <Tab onClick={onClick} key={index} element={tap} isActive={tap === activeTab} />
      ))}
    </Wrapper>
  );
};

export default SideBarTabs;
