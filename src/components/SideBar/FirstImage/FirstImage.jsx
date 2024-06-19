import { Img } from "./FirstImage.styled";

const FirstImage = ({ img }) => {
  return (
    <div>
      <Img src={img} alt="" />
    </div>
  );
};

export default FirstImage;
