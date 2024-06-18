import { IconStyled } from './style.js';
import {IconProfile} from "./Icons/IconProfile.jsx";
import {IconEdit} from "./Icons/IconEdit.jsx";
import {IconGoogle} from "./Icons/IconGoogle.jsx";
import {IconNaver} from "./Icons/IconNaver.jsx";
import {IconKakao} from "./Icons/IconKakao.jsx";
import {IconGithub} from "./Icons/IconGithub.jsx";
import { IconMyPage } from "./Icons/IconMyPage.jsx";
import { IconMarker } from "./Icons/IconMarker.jsx";
import { IconSearch } from "./Icons/IconSearch.jsx";

function Icon({ name, color, ...props }) {
  const parseIcon = (name) => {
    switch (name) {
      case 'profile': {
        return <IconProfile />;
      }
      case 'edit': {
        return <IconEdit />;
      }
      case 'google': {
        return <IconGoogle />;
      }
      case 'naver': {
        return <IconNaver />;
      }
      case 'kakao': {
        return <IconKakao />;
      }
      case 'github' : {
        return <IconGithub />
      }
      case 'mypage' : {
        return <IconMyPage />
      }
      case 'marker' : {
        return <IconMarker />
      }
      case 'search' : {
        return <IconSearch />
      }
      default: {
        return null;
      }
    }
  };
  return (
    <IconStyled color={color} {...props}>
      {parseIcon(name)}
    </IconStyled>
  );
}
export default Icon;
