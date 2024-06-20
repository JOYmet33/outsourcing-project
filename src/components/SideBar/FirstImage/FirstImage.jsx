import { Img } from "./FirstImage.styled";
import defaultImg from "../../../assets/img/default_campsite_img.png";

const FirstImage = ({ img }) => {
  return (
    <div>
      <Img src={img || defaultImg} />
    </div>
  );
};

export default FirstImage;
