import { useQuery } from "@tanstack/react-query";
import useCampsiteStore from "../store/campsiteStore";
import campsiteApi from "../lib/api/campsite.api";
import { haversineDistance } from "../utils/distance";
import { useEffect } from "react";

const useCampsitesQuery = (position) => {
  const openSideBar = useCampsiteStore((state) => state.openSideBar);

  const keyword = useCampsiteStore((state) => state.keyword);
  const { data, error: queryError } = useQuery({
    queryKey: ["campingSites", { keyword, position }],
    queryFn: async () => {
      try {
        const data = keyword
          ? await campsiteApi.getListWithKeyword(keyword)
          : await campsiteApi.getListWithLocation({ mapX: position.lng, mapY: position.lat });

        if (data) {
          return data
            .map((item) => ({
              ...item,
              distance: parseFloat(
                haversineDistance(position, { lat: parseFloat(item.mapY), lng: parseFloat(item.mapX) }),
              ),
            }))
            .sort((a, b) => a.distance - b.distance);
        }

        return [];
      } catch (e) {
        console.error(e);
        return [];
      }
    },

    enabled: !!position.lat && !!position.lng,
  });

  useEffect(() => {
    data && keyword && openSideBar();
  }, [data]);

  return { data, queryError };
};

export default useCampsitesQuery;
