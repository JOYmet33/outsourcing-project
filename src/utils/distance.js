// utils/distance.js
export const haversineDistance = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const lat1 = coords1.lat;
  const lon1 = coords1.lng;
  const lat2 = coords2.lat;
  const lon2 = coords2.lng;
  const R = 6371; // km 단위 지구 반지름
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); // 소수점 둘째 자리까지 거리 반환
};
