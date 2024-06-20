import React from "react";

const ListItem = React.memo(({ item, index, onClick }) => (
  <div className="list-item" onClick={() => onClick(item)}>
    <h2>
      {index + 1}. {item.facltNm}
    </h2>
    <p>{item.addr1}</p>
    <p>{item.tel}</p>
    <p>거리: {item.distance} km</p>
  </div>
));

export default ListItem;
