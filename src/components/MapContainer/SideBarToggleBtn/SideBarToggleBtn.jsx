import { Button } from "./SideBarToggleBtn.tyled";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const SideBarToggleBtn = ({ isSideBarOpened, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span>
        {!isSideBarOpened && <MdOutlineArrowForwardIos />}
        {isSideBarOpened && <MdOutlineArrowBackIos />}
      </span>
    </Button>
  );
};

export default SideBarToggleBtn;
