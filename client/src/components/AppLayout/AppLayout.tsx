import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import BackToTopButton from './BackToTopButton';
import { AlarmPop, FooterBox, HeaderBox } from './styled';
import { useState } from 'react';
import { useCallback } from 'react';

const AppLayout: FC = ({ children }) => {
  const location = useLocation().pathname.split('/')[1];
  const [connectStatus, setConnectStatus] = useState(true);
  const [alarmStatus, setAlarmStatus] = useState(true);
  const [alarmToggleStatus, setAlarmToggleStatus] = useState(false);

  const onHandleAlarmClick = useCallback(() => {
    setAlarmToggleStatus((prev) => !prev);
  }, []);
  return (
    <>
      <ScrollToTop />
      <HeaderBox>
        <header className="gnb_pc">
          <Link to="/">
            <h1 className="logo_main">doongji</h1>
          </Link>

          <nav>
            <ul className="gnb">
              <li className={location === 'about' ? 'active' : ''}>
                <Link to="/about">소개</Link>
              </li>
              <li className={location === 'project' ? 'active' : ''}>
                <Link to="/project">프로젝트</Link>
              </li>
              <li className={location === 'calendar' ? 'active' : ''}>
                <Link to="/calendar">캘린더</Link>
              </li>
              <li className={location === 'community' ? 'active' : 'dropDownStatus'}>
                <Link to="/community">커뮤니티</Link>
                <ul className="lnb">
                  <li>
                    <Link to="/community">공지사항</Link>
                  </li>
                  <li>
                    <Link to="/community">자유게시판</Link>
                  </li>
                  <li>
                    <Link to="/community">질문게시판</Link>
                  </li>
                  <li>
                    <Link to="/community">링크게시판</Link>
                  </li>
                </ul>
              </li>
              <li className={location === 'question' ? 'active' : ''}>
                <Link to="/question">Q&A</Link>
              </li>
            </ul>
          </nav>
          {connectStatus ? (
            <ul className="snb status_login">
              <li className={alarmStatus ? 'alarm on' : 'alarm'} onClick={onHandleAlarmClick}>
                <div className="alarm_btn"></div>
                <AlarmPop className={alarmToggleStatus ? 'active' : ''}>
                  <p>바나나우유는빙그레님의 글에 누군가 답해줬어요!</p>
                  <p>
                    읽지 않은 알림 <span>3</span>
                  </p>
                  <ul>
                    <li>
                      <div className="alarm_contents new">
                        <p>
                          <i></i>
                          <b>둥지프로젝트 일정</b>이 업데이트되었습니다.
                        </p>
                        <p className="time">5분 전</p>
                      </div>
                    </li>
                    <li>
                      <div className="alarm_contents">
                        <p>[오늘 날씨는 화창하고...] 댓글을 확인해주세요.</p>
                        <span className="time">5분 전</span>
                        <p>
                          by. 제티초코우유<span>오늘 점심은 뭐먹지?</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </AlarmPop>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          ) : (
            <ul className="snb status_logout on">
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signin">회원가입</Link>
              </li>
            </ul>
          )}
        </header>
      </HeaderBox>
      {children}
      <FooterBox>
        <div>
          <h1>로고</h1>
          <p>Copyrightdⓒ 2021. doongji. All rights reserved</p>
          <a href="">doongji@gmail.com</a>
        </div>
      </FooterBox>
      <BackToTopButton />
    </>
  );
};

export default AppLayout;
