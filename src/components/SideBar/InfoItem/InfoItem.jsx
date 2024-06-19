import { Wrapper } from "./InfoItem.styled";

const InfoItem = ({ label, value }) => {
  if (!value) return null;
  return (
    <Wrapper>
      <label>{label}</label>
      <p>{value}</p>
    </Wrapper>
  );
};

export default InfoItem;
