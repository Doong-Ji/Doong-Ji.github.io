import { Button } from 'antd';
import { SiteLayoutBackground } from './styeld';
import { FC } from 'react';

import { Content } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

const DoongjiJoin: FC = () => {
  return (
    <section className="section">
      <Content className="site-layout">
        <SiteLayoutBackground>
          <div className="join_area">
            <h1 className="main_title">JOIN US</h1>
            <p className="desc_title">같이 공부하고 성장할 친구가 필요하신가요?</p>
            <p className="sub_title">둥지에서 여러분을 기다립니다!</p>
            <Button type="primary" shape="round" className="btn_to_page">
              <Link to="signup">
                <span>JOIN US</span>
                <img src="/assets/img/btn_arrow_right.svg" />
              </Link>
            </Button>
          </div>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};
export default DoongjiJoin;
