import { StyledTab } from "./Tab.styled";

const Tab = ({ onClick, element, isActive }) => {
  return (
    <StyledTab onClick={() => onClick(element)} $isActive={isActive}>
      {element}
    </StyledTab>
  );
};

export default Tab;
