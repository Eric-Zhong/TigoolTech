/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from '../../components/Nav0';
import Banner0 from '../../components/Banner0';
import Content0 from '../../components/Content0';
import Content1 from '../../components/Content1';
import Content2 from '../../components/Content2';
import Content5 from '../../components/Content5';
import Footer0 from '../../components/Footer0';

import {
  HeaderNavDataSource,
  FooterDataSource,
} from '../data.source.common'

import {
  Banner00DataSource,
  Content00DataSource,
  Content10DataSource,
  Content20DataSource,
  Content11DataSource,
  Content21DataSource,
  Content50DataSource,
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
        id="Nav0_1"
        key="Nav0_1"
        dataSource={HeaderNavDataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_0"
        key="Content1_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content2
        id="Content2_0"
        key="Content2_0"
        dataSource={Content20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_1"
        key="Content1_1"
        dataSource={Content11DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content2
        id="Content2_1"
        key="Content2_1"
        dataSource={Content21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      /*
      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      */
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
