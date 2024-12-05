import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  Padding_main: "18px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{box-sizing: border-box;
}

.ub-min-w_200px {
    min-width: 80px !important;
  }

body{
  color: #000;
  background-color: #f3f6f8;
  letter-spacing: -1px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  font-style: normal;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}

ul, li{
  list-style: none;
}
`;
