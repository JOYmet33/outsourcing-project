import { Wrapper } from "./InfoItem.styled";

const InfoItem = ({ label, value }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <p>{value || "해당 항목이 존재하지 않습니다."}</p>
    </Wrapper>
  );
};

export default InfoItem;
