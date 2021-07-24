import React, { useEffect, useState } from 'react';
import { BackToBtn } from './styles';

const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const onHandleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const onHandleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    window.addEventListener('scroll', onHandleFollow);
    return () => {
      window.removeEventListener('scroll', onHandleFollow);
    };
  });
  return (
    <BackToBtn className={btnStatus ? 'active' : ''} onClick={onHandleTop}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </BackToBtn>
  );
};

export default BackToTopButton;
