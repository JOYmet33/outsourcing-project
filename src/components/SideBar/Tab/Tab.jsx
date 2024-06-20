import { StyledTab } from "./Tab.styled";

// const convertToKorean = (element) => {
//   switch (element) {
//     case "Home":
//       return "메인";

//     case "Amenities":
//       return "시설 정보";

//     case "Reviews":
//       return "리뷰";
//   }
// };

const Tab = ({ onClick, element, isActive }) => {
  // const convertedTab = convertToKorean(element);

  return (
    <StyledTab onClick={() => onClick(element)} $isActive={isActive}>
      {element}
    </StyledTab>
  );
};

export default Tab;
