import styled from '@emotion/styled';

export const HomeWrap = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .main_title {
    font-size: 2.3rem;
    font-weight: 900;
    line-height: 3.2rem;
    word-break: keep-all;
    letter-spacing: -1vw;
    span {
      display: block;
    }
  }
  .section {
    background-color: #fff;
  }
  .sub_title {
    font-size: 1.1rem;
    line-height: 1.3;
    font-weight: 500;
  }
  .main_bg_img {
    position: absolute;
  }
  .btn_to_page {
    padding: 4vw 7vw;
    height: auto;
    background: #0442bf;
    border: #0442bf;
    border-radius: 10vw;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      font-size: 1rem;
      margin-right: 3vw;
    }
    img {
      width: 12vw;
    }
  }
  @media only screen and (min-width: 769px) {
    background: white;
    .main_title {
      font-size: 2.8rem;
      font-weight: 900;
      line-height: 3.5rem;
      letter-spacing: -0.2vw;
    }
    .sub_title {
      font-size: 1.4rem;
      line-height: 1.7;
    }
    //button component
    .btn_to_page {
      padding: 1vw 2vw;
      height: auto;
      background: #0442bf;
      border: #0442bf;
      border-radius: 10vw;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      span {
        font-size: 2.4rem;
        margin-right: 3vw;
      }
      img {
        width: 8vw;
      }
    }
  }
`;
