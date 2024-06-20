import { Wrapper } from "./ListItem.styled";

const ListItem = ({ item, index, onClick }) => (
  <Wrapper onClick={() => onClick(item)}>
    <h2>
      {index + 1}. {item.facltNm}
    </h2>
    <p>{item.addr1}</p>
    <p>{item.tel}</p>
    <p>거리: {item.distance} km</p>
  </Wrapper>
);

export default ListItem;
