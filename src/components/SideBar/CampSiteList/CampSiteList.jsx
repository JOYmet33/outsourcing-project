import React, { memo, useCallback } from "react";
import { ListWrapper } from "./CampSiteList.styled";
import ListItem from "./ListItem"; // ListItem 컴포넌트를 import

const CampSiteList = ({ data = [], handleMarkerClick, showList, setShowList }) => {
  const handleClick = useCallback(() => {
    setShowList((prevShowList) => !prevShowList);
  }, [setShowList]);

  return (
    <>
      <button onClick={handleClick}>{showList ? "접기" : "펼치기"}</button>
      {showList && (
        <ListWrapper>
          <h1>근처 캠핑장</h1>
          {data.length > 0 ? (
            data.map((item, index) => (
              <ListItem key={item.contentId} item={item} index={index} onClick={handleMarkerClick} />
            ))
          ) : (
            <p>캠핑장 데이터를 불러올 수 없습니다.</p>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default memo(CampSiteList);
