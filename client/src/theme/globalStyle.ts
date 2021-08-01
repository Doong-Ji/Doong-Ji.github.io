import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    height: 100%;
  }
  html {
    font-size: 14px;
    height: 100%;
  }
  .ant-carousel .slick-dots li button {
    height: 13px;
  }
  .ant-list.ant-list-split.ant-list-grid {
    display: none;
  }
  // 모달
  .ant-modal {
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    .ant-modal-content {
      box-sizing: border-box;
      padding: 70px 0 60px;
      border-radius: 50px;
      background-color: #ffffff;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    }
    .ant-modal-header {
      border: none;
    }
    .ant-modal-body {
      padding: 0;
    }
    .ant-modal-confirm-body {
      padding: 0 48px;
      max-height: 490px;
      text-align: center;
      font-size: 1.4rem;
    }
    .ant-modal-confirm-btns {
      display: flex;
      width: 100%;
      margin-top: 50px;
      border: none;
      justify-content: center;
    }
    .ant-modal-confirm-btns button {
      width: 130px;
      height: 50px;
      border-radius: 50px;
    }
    .ant-modal-footer .ant-btn + .ant-btn {
      border: 1px solid #e2e2e2;
      margin-left: 20px;
    }
    .ant-modal-footer ant-btn-primary,
    .ant-modal-confirm-btns ant-btn-primary {
      border: 1px solid #456fc5;
      background-color: #456fc5;
      color: #ffffff;
    }
  }
  .ant-modal.hidden-btn {
    .ant-modal-footer,
    .ant-modal-confirm-btns {
      display: none;
    }
  }
  .ant-modal.btn_shadow {
    .ant-modal-content {
      padding-bottom: 40px;
    }

    .ant-modal-confirm-btns {
      padding-top: 20px;
      box-shadow: inset 0px 10px 25px -15px rgba(22, 22, 22, 0.3);
    }
  }

  /* RADIO */
  .checks {
    position: relative;
  }
  .checks input[type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .checks input[type='radio'] + label {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    margin-bottom: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .checks input[type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 21px;
    height: 21px;
    text-align: center;
    background: #f2f2f2;
    border: 1px solid #e2e2e2;
    border-radius: 100%;
    box-shadow: 0px 0px 4px rgba(168, 168, 168, 0.25);
  }
  .checks input[type='radio'] + label:active:before,
  .checks input[type='radio']:checked + label:active:before {
    box-shadow: 0px 0px 4px rgba(168, 168, 168, 0.25);
  }
  .checks input[type='radio']:checked + label:before {
    background: #f2f2f2;
    border-color: #456fc5;
  }
  .checks input[type='radio']:checked + label:after {
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    width: 13px;
    height: 13px;
    background: #456fc5;
    border-radius: 100%;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

export default GlobalStyle;
