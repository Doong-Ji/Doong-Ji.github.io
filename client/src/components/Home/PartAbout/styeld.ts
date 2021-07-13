import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  position: relative;
  width: 100%;
  padding: 14vw 14px 0;
  .bg_pastel_pabout {
    position: absolute;
    top: 50vw;
    right: 0;
    z-index: 0;
    width: 70.93vw;
    height: 196.875vw;
    background: url('/assets/img/bg_home_pabout.png') no-repeat;
    background-size: contain;
  }
  .part_img {
    width: 100%;
    padding: 0 27px;
    margin: 39px auto 20px;
    img {
      width: 100%;
    }
  }

  /*Tab Content*/
  .part_tabs_wrap {
    flex-direction: column-reverse;
    .ant-tabs-nav {
      margin-top: 20vw;
      font-weight: 600;
      .ant-tabs-nav-wrap {
        justify-content: flex-end;
      }
      .ant-tabs-nav-list {
        display: block;
        .ant-tabs-tab {
          display: block;
          padding: 6px 0;
        }
      }
      .ant-tabs-tab {
        font-size: 17px;
      }
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0;
      }
      .ant-tabs-ink-bar-animated {
        display: none;
      }
    }
    .ant-tabs-nav::before {
      border: none;
    }
    .ant-tabs-nav-wrap::after {
      box-shadow: none;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #326de4;
    }
    .ant-tabs-tab:hover {
      color: inherit;
    }
    .sub_title {
      span {
        vertical-align: middle;
      }
      .view_fill {
        margin-left: 2vw;
        font-size: 0;
      }
    }
  }

  /*Content*/
  .tabs_content_wrap {
    margin-top: 20px;
    h2 {
      display: inline-block;
      height: 13px;
      padding-right: 13px;
      line-height: 0.7;
      background: rgba(255, 180, 52, 0.44);
      span {
        position: relative;
        bottom: 16px;
      }
    }
    p {
      word-break: keep-all;
      width: 70%;
    }
  }

  @media only screen and (min-width: 769px) {
    padding: 0 9.9vw;
    .bg_pastel_pabout {
      top: 10vw;
      width: 35.39vw;
      height: 98.203vw;
    }
    .part_img {
      position: absolute;
      top: 9vw;
      right: 9.9vw;
      width: 458px;
      height: 463px;
      padding: 0;
      margin: 0;
      img {
        height: 100%;
      }
    }
    .part_tabs_wrap {
      margin-top: 8vw;
      /*Tab*/
      .ant-tabs-nav {
        margin-top: 4vw;
        font-weight: 600;
        .ant-tabs-nav-wrap {
          justify-content: flex-start;
        }
      }
      /*Content*/
      .tabs_content_wrap {
        margin-top: 20px;
        line-height: 1;
        h2 {
          span {
            position: relative;
            bottom: 16px;
          }
        }
      }
      p {
        word-break: keep-all;
        width: 30%;
      }
    }
  }
`;
