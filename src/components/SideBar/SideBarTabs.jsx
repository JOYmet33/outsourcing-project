import { SIDE_BAR_TABS } from "../../constants/sideBarTabConstants";
import Tab from "./Tab";

const SideBarTabs = ({ onClick }) => {
  return (
    <div>
      {SIDE_BAR_TABS.map((tap, index) => (
        <Tab onClick={onClick} key={index} element={tap}></Tab>
      ))}
    </div>
  );
};

export default SideBarTabs;
