import { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { SiteLayoutBackground } from './styeld';
const DoongjiAbout: FC = () => {
  return (
    <section className="section">
      <Content className="site-layout">
        <SiteLayoutBackground>
          <h1 className="main_title">
            <span>둥지는</span>
            <span>어떤 곳이죠?</span>
          </h1>
          <article>
            <div className="doongji_about_content fir">
              <div className="flex_box">
                <p className="sub_title">다양한 사람들이 모여서 프로젝트를 진행하고 질문하는 공간입니다.</p>
              </div>
              <div className="img_box">
                <img src="/assets/img/img_home_about_01.png" className="" />
              </div>
            </div>
            <div className="doongji_about_content two">
              <div className="flex_box">
                <p className="sub_title">
                  또한,
                  <br />
                  같이 프로젝트를 하는 동안 일정을 공유하거나 당신의 프로젝트를 공개할 수 있는 공간입니다.
                </p>
              </div>
              <div className="img_box">
                <img src="/assets/img/img_home_about_02.png" className="" />
              </div>
            </div>
          </article>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default DoongjiAbout;
