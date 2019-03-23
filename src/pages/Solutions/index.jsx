/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from '../../components/Nav0';
import Content9 from '../../components/Content9';
import Footer0 from '../../components/Footer0';


import {
  HeaderNavDataSource,
  FooterDataSource,
} from '../data.source.common'

import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';
import Content0 from '../../components/Content0';
import Content4 from '../../components/Content4';
import Content6 from '../../components/Content6';
import Content7 from '../../components/Content7';
import Content3 from '../../components/Content3';
import Banner3 from '../../components/Banner3';
import Content13 from '../../components/Content13';
import Content8 from '../../components/Content8';


import {
  Nav00DataSource,
  Banner10DataSource,
  Banner20DataSource,
  Content00DataSource,
  Content40DataSource,
  Content60DataSource,
  Content70DataSource,
  Content30DataSource,
  Banner30DataSource,
  Content130DataSource,
  Content80DataSource,
  Footer10DataSource,
} from './data.source';

// import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content6
        id="Content6_0"
        key="Content6_0"
        dataSource={Content60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={Content70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content8
        id="Content8_0"
        key="Content8_0"
        dataSource={Content80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={FooterDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
