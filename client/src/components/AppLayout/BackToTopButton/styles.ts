import styled from '@emotion/styled';

export const BackToBtn = styled.button`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 75px;
  height: 75px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;
  cursor: pointer;
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  border: none;
  border-radius: 50%;
  transition: 200ms;
  opacity: 0;
  &.active {
    opacity: 1;
  }
  svg {
    fill: white;
    width: 30px;
    height: 30px;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }
  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    width: 80px;
    height: 80px;
    svg {
      animation: bounce 2s infinite linear;
    }
  }
  @keyframes bounce {
    0% {
      transform: translateX(-50%) translateY(-50%);
    }
    25% {
      transform: translateX(-50%) translateY(-65%);
    }
    50% {
      transform: translateX(-50%) translateY(-50%);
    }
    75% {
      transform: translateX(-50%) translateY(-35%);
    }
    100% {
      transform: translateX(-50%) translateY(-50%);
    }
  }
  &:focus {
    outline: none;
  }
`;
