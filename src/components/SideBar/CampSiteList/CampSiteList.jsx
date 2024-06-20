import ListItem from "../ListItem/ListItem";
import { ListWrapper } from "./CampSiteList.styled";

// const ListItem = ({ item, index, onClick }) => (
//   <div className="list-item" onClick={() => onClick(item)}>
//     <h2>
//       {index + 1}. {item.facltNm}
//     </h2>
//     <p>{item.addr1}</p>
//     <p>{item.tel}</p>
//     <p>거리: {item.distance} km</p>
//   </div>
// );

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
