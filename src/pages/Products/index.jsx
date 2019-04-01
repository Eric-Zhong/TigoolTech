/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

// Images
import logo_tigooltech_white from '../../assets/logo_tigooltech_white.png';

// Componenets
import Nav0 from '../../components/Nav0';
import Banner1 from '../../components/Banner1';
import Footer0 from '../../components/Footer0';
import Content3 from '../../components/Content3';

/*
import Banner2 from '../../components/Banner2';
import Banner3 from '../../components/Banner3';
import Content0 from '../../components/Content0';
import Content6 from '../../components/Content6';
import Content7 from '../../components/Content7';
import Content8 from '../../components/Content8';
import Content9 from '../../components/Content9';
import Content13 from '../../components/Content13';
*/

import {
  HeaderNavDataSource,
  FooterDataSource,
  // ProductsDataSource,
} from '../data.source.common';

import {
  ProductsDataSource,
  ProductServiceDataSource,
} from './products.source';

import img_logo_white from '../../assets/logo_tigooltech_white.png'
// import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;


const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children: img_logo_white,
        },
        content: {
          className: 'banner1-content',
          children: '基于企业级应用系统集成平台，快速实现企业业务流程再造，快速适应业务变化',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: img_logo_white,
        },
        content: {
          className: 'banner1-content',
          children: '智慧城市社区平台，帮助老百姓更舒适地生活',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
    ],
  },
};


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
        dataSource={HeaderNavDataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content4_0"
        key="Content4_0"
        dataSource={ProductServiceDataSource}
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
