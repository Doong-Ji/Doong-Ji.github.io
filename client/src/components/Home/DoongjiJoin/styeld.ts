import styled from '@emotion/styled';
export const SiteLayoutBackground = styled.div`
  padding: 28vw 0;
  background: url('/assets/img/bg_home_join.png') no-repeat;
  background-position: 48vw 62vw;
  background-size: 120%;
  .join_area {
    width: 80vw;
    margin: auto;

    .desc_title {
      color: #a6a6a6;
      font-size: 1rem;
      margin: 10vw 0 2vw;
    }
    .btn_to_page {
      margin-top: 15vw;
    }
  }
  @media only screen and (min-width: 769px) {
    padding: 14vw 0;
    background-position: -20vw 0;
    background-size: 100%;
    .join_area {
      width: 30vw;
      margin-left: 45vw;
      .desc_title {
        margin: 4vw 0 1vw;
      }
      .btn_to_page {
        margin-top: 5vw;
      }
    }
  }
`;
