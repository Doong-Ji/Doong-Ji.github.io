import styled from '@emotion/styled';
export const HeaderBox = styled.div`
  color: #000;
  .gnb_pc {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #e1e0e1;
    padding: 0 25px;
    box-sizing: border-box;
    background: #fff;
    .logo_main {
      width: 183px;
      height: 37px;
      background: url('/logo_main.svg') center / cover no-repeat;
      text-indent: -9999px;
      margin-right: 58.5px;
    }
    .gnb {
      display: flex;
      align-items: center;
    }
  }

  /* 대카테고리 */
  .gnb {
    gap: 30px;
    .dropDownStatus:hover .lnb,
    .dropDownStatus:focus .lnb {
      display: flex;
      opacity: 1;
    }
    > li {
      height: 60px;
      line-height: 60px;
      font-size: 1.0625rem;
      font-weight: 500;
      a {
        padding: 0 10px;
        box-sizing: border-box;
      }
      &:hover > a,
      &:focus > a {
        color: #0442bf;
        border-bottom: 2px solid #0442bf;
        box-sizing: border-box;
      }
    }
  }
  /* 소카테고리 */
  .gnb_pc .lnb {
    width: 100%;
    padding-left: 255px;
    box-shadow: 0 10px 10px rgba(166, 166, 166, 0.3);
    position: absolute;
    top: 61px;
    left: 0;
    box-sizing: border-box;
    background: #fff;
    opacity: 0;
    display: none;
    li {
      &:hover a {
        color: #0442bf;
      }
      a {
        padding: 0 20px;
      }
    }
  }
  /* 서브메뉴 */
  .gnb_pc .snb {
    margin-left: auto;
    color: #a6a6a6;
    font-size: 0.8125rem;
    display: flex;
  }
  .snb.on {
    display: inline-flex;
  }
  .snb > li {
    height: 60px;
    line-height: 60px;
  }
  .gnb_pc .snb > li:first-child a::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 12px;
    background: #a6a6a6;
    margin: 0 6px;
  }
  .gnb_pc .snb > li a::before {
    content: '';
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
  .gnb_pc .status_logout > li:first-child a::before {
    width: 13px;
    height: 16px;
    background: url('../assets/ico/ico_user_lg.svg') center / cover no-repeat;
  }
  .gnb_pc .status_logout > li:last-child a::before {
    width: 17px;
    height: 17px;
    background: url('../assets/ico/ico_signin_lg.svg') center / cover no-repeat;
  }
  .gnb_pc .status_login .alarm {
    width: 15px;
    margin-right: 20px;
    background: url('../assets/ico/ico_alarm.svg') center / 20px no-repeat;
    position: relative;
    cursor: pointer;
  }
  .gnb_pc .status_login .alarm.on::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 14px;
    right: 6px;
    background: #e74659;
    border-radius: 50%;
  }
  .gnb_pc .status_login > li:last-child > a {
    margin-top: 13px;
    display: inline-block;
    width: 34px;
    height: 34px;
    background: url(../assets/img/img_profile_default.png) center / cover no-repeat;
    border-radius: 50%;
  }
  .gnb_pc .snb > li:hover a {
    color: #0442bf;
  }
  .gnb_pc .status_logout > li:first-child:hover a::before {
    background: url('../assets/ico/ico_user_b.svg') center / cover no-repeat;
  }
  .gnb_pc .status_logout > li:last-child:hover a::before {
    background: url('../assets/ico/ico_signin_b.svg') center / cover no-repeat;
  }
`;
export const AlarmPop = styled.div`
  /* 알림팝업 */
  width: 400px;
  padding: 22px 0 18px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(190, 197, 204, 2.5);
  border-radius: 30px;
  position: absolute;
  color: #000;
  top: 60px;
  right: -40px;
  z-index: 1;
  font-size: 0.8125rem;
  display: none;
  &.active {
    display: block;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 29px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    right: 40px;
    top: -9px;
  }
  div {
    padding: 14px 26px;
  }
  & > p {
    padding: 4px 26px;
  }
  & > p:nth-of-type(2) {
    font-size: 0.9375rem;
    font-weight: 500;
    display: inline-block;
    border-bottom: 5px solid #456fc5;
    margin-left: 25px;
    padding: 0px 0 7px;
  }
  & > p:nth-of-type(2) span {
    color: #456fc5;
  }
  .alarm_contents > p:first-child::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #e2e2e2;
    vertical-align: text-top;
    margin-right: 5px;
  }
  .alarm_contents > p:nth-of-type(2) {
    color: #a6a6a6;
    padding: 0;
    margin-left: 10px;
  }

  .alarm_contents > p:nth-of-type(2) span {
    margin-left: 10px;
  }
  .alarm_contents > p:nth-of-type(1) {
    width: calc(100% - 60px);
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .new {
    background: #f5f9fd;
  }
  .alarm_contents.new p:first-child::before {
    background: #456fc5;
  }
  .time {
    float: right;
  }
`;
export const FooterBox = styled.footer`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  & > div {
    width: calc(100% - 100px);
    height: 106px;
    margin: 0 auto;
    box-sizing: border-box;
    border-top: 1px solid #a6a6a6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    width: 146px;
    height: 46px;
    background: url('../assets/img/logo_doongji_g.png') no-repeat;
    text-indent: -9999px;
  }
  a {
    display: inline-block;
    width: auto;
    height: auto;
    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 30px;
      height: 30px;
      background: url('../assets/ico/ico_github_g.svg') left center / contain no-repeat;
    }
  }

  @media screen and (max-width: 480px) {
    > div {
      width: calc(100% - 28px);
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0 16px;
    }
    h1 {
      width: 93px;
      height: 30px;
      background: url(../assets/img/logo_doongji_g.png) center / contain no-repeat;
    }
    p {
      font-size: 0.75rem;
      margin: 5px 0 37px;
    }
    a {
      display: inline-block;
      width: auto;
      height: auto;
      font-size: 0.75rem;
      /* margin-top: 30px; */
      &:before {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 3px;
      }
    }
  }
`;
