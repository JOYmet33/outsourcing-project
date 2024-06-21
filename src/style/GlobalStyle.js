import "./reset.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --color-white: #ffffff;
    --color-white-dark: #f2f2f2;
    --color-black:#000000;
    --color-black-light:#121212;
    --color-gray-light:#D9D9D9;
    --color-gray-dark:#495057;
    --color-gray-normal:#999999;
}

#root {
  height: 100vh;
}

`;

export default GlobalStyle;
