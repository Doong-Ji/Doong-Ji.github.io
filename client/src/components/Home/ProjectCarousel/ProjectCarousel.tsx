import { Content } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem, SiteLayoutBackground } from './styeld';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

const data = [
  {
    id: '1',
    title: '둥지 홈페이지',
    coment: '당신의 개발실력을 늘려보세요 ~!',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/1/',
  },
  {
    id: '2',
    title: '콜라 맵',
    coment: '콜라 vs 펩시 당신의 선택은 ?',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/2/',
  },
  {
    id: '3',
    title: '둥카오톡',
    coment: '카카오톡 오늘도 울리는군요',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/3/',
  },
];

const ProjectCarousel: FC = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

  return (
    <section className="section">
      <Content>
        <SiteLayoutBackground>
          <ProjectItem>
            <div className="bg_project_txt"></div>
            <div className="bg_pastel_project"></div>
            <h2 className="main_title">
              <span>둥지는 어떤 프로젝트를 하나요?</span>
            </h2>
            <p className="sub_title">다양한 경험으로 당신의 커리어를 완성해보세요</p>
            <div className="project_slide">
              <div className="swiper_container_img">
                <Swiper
                  className="swiper_container"
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={1.4}
                  navigation={true}
                  pagination={{ type: 'fraction' }}
                  onSlideChange={(swiper) => {
                    const slideTitle = document.getElementById('slideTitle');
                    const slideContent = document.getElementById('slideContent');
                    slideTitle!.innerHTML = data[swiper.realIndex].title;
                    slideContent!.innerHTML = data[swiper.realIndex].coment;
                  }}
                >
                  {data.map((item) => {
                    return (
                      <div key={item.id}>
                        <SwiperSlide>
                          <img src={item.Thumbnail} />
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
              </div>

              <div className="swiper_container_txt">
                <h2 id="slideTitle">dddd</h2>
                <h3 id="slideContent">dd</h3>
                {/* <Swiper
                  className="swiper-container2"
                  style={{ width: '100%' }}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={() => {
                    swiper: thumbsSwiper;
                  }}
                  effect={'fade'}
                  loop={true}
                  watchSlidesVisibility={true}
                  watchSlidesProgress={true}
                  pagenation={{}}
                >
                  <div>
                    {data.map((item) => {
                      return (
                        <div key={item.id}>
                          <SwiperSlide className="project_contnet_sliders">
                            <h2>{item.title}</h2>
                            <h3>{item.coment}</h3>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                    ;
                  </div>
                </Swiper> */}

                <Link className="to_project_link" to="project">
                  VIEWMORE
                </Link>
              </div>
            </div>
          </ProjectItem>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default ProjectCarousel;
