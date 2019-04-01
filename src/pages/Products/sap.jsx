/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

// Images
import logo_tigooltech_white from '../../assets/logo_tigooltech_white.png';

// Componenets
import Nav0 from '../../components/Nav0';
import Footer0 from '../../components/Footer0';
import Content7 from '../../components/Content7';

/*
import Banner2 from '../../components/Banner2';
import Banner3 from '../../components/Banner3';
import Content6 from '../../components/Content6';
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
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={ProductDetailDataSource}
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




const ProductDetailDataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      { name: 'content', children: '基于阿里云计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
