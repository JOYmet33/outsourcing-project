import ListItem from "../ListItem/ListItem";
import { ListWrapper } from "./CampSiteList.styled";

const CampSiteList = ({ data, handleMarkerClick }) => {
  return (
    <ListWrapper>
      <div>
        <h1>근처 캠핑장</h1>
        {data?.map((item, index) => (
          <ListItem key={item.contentId} item={item} index={index} onClick={handleMarkerClick} />
        ))}
      </div>
    </ListWrapper>
  );
};

export default CampSiteList;
