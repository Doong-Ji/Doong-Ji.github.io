import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    height: 100%;
    color: #000;
    text-decoration: none;
    list-style: none;
  }
  html {
    height: 100%;
  }
  .ant-carousel .slick-dots li button {
    height: 13px;
  }
  a:link {
    color: #000;
    text-decoration: none;
  }

  a:visited {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
