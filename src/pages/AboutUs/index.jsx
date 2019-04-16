/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import {
  HeaderNavDataSource,
  FooterDataSource,
} from '../data.source.common'

import Nav0 from '../../components/Nav0';
import Banner2 from '../../components/Banner2';
import Content8 from '../../components/Content8';
import Footer0 from '../../components/Footer0';

// import './less/antMotionStyle.less';
import img_eric_xuzhong from './images/eric_xuzhong.jpg';
import img_20130301 from './images/20130301.jpg';
import img_20131101 from './images/20131101.jpg';
import img_20140601 from './images/20150601.jpg';
import img_20150201 from './images/20150201.jpg';
import img_20151010 from './images/20151010.jpg';
import img_20161001 from './images/20161001.jpg';
import img_20170401 from './images/20170401.jpg';
import img_20170516 from './images/20170516.jpg';
import img_20170820 from './images/20170820.jpg';
import img_20171010 from './images/20171010.jpg';
import img_20180410 from './images/20180410.jpg';
import img_20180510 from './images/20180510.jpg';
import img_20180801 from './images/20180801.jpg';
import img_20181212 from './images/20181212.jpg';
import img_20190205 from './images/20190205.jpg';
import img_20190225 from './images/20190225.jpg';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;


const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: { className: 'banner2-title', children: '关于我们' },
        content: {
          className: 'banner2-content',
          children: '我们是一群充满激情，渴望成功的年青人！',
        },
        button: { className: 'banner2-button', children: '加入我们' },
      },
    ],
  },
};

export default class Home extends React.Component {
  
  data = [
    {image: img_20130301, date: '2013年3月', desc: '嘉实项目组准备系统上线'},
    {image: img_20131101, date: '2013年11月', desc: '中海壳牌ESB升级项目如期结束'},
    {image: img_20140601, date: '2014年4月', desc: '云中控项目组封闭式开发'},
    {image: img_20150201, date: '2015年2月', desc: '云中控项目组乌镇新年Kick-off会议'},
    {image: img_20151010, date: '2015年10月', desc: '云中控项目庆祝拿到天使投资'},
    {image: img_20161001, date: '2016年10月', desc: '中车项目组客户现场集成测试'},
    {image: img_20170401, date: '2017年4月', desc: '富奥项目组实施方案讨论会'},
    {image: img_20170516, date: '2017年5月', desc: 'SBG报价工具项目组系统设计讨论'},
    {image: img_20170820, date: '2017年8月', desc: 'ETO P+项目组与客户需求讨论及确认'},
    {image: img_20171010, date: '2017年10月', desc: 'ETO P+项目组与客户讨论系统架构设计'},
    {image: img_20180801, date: '2018年8月', desc: 'ETO P+项目组现场客户需求调研会'},
    {image: img_20180410, date: '2018年4月', desc: 'ETO P+项目组客户现场培训会'},
    {image: img_20180510, date: '2018年5月', desc: 'ETO P+项目系统上线留念'},
    {image: img_20181212, date: '2018年12月', desc: 'SBG P+项目组现场客户UAT'},
    {image: img_20190205, date: '2019年2月', desc: 'SBG P+项目上线后珠江庆祝'},
    {image: img_20190225, date: '2019年2月', desc: 'SBG P+项目组与客户合影'},
  ];
  
  
  generateBlock = (data) => {
    var output = [];
    data.map((item, index)=>{
      output.unshift({
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: item.image,
          },
          title: { className: 'content8-title', children: item.date },
          content: {
            className: 'content8-content',
            children: 
              <span>
                <p>{item.desc}</p>
              </span>,
          },
        },
      });
    });
    return output;
  }


  Content80DataSource = {
    wrapper: { className: 'home-page-wrapper content8-wrapper' },
    page: { className: 'home-page content8' },
    OverPack: { playScale: 0.3 },
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'image',
          children:
            'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
          className: 'title-image',
        },
        { name: 'title', children: '队员风采', className: 'title-h1' },
      ],
    },
    block: {
      className: 'content-wrapper', 
      children: this.generateBlock(this.data),
    },
  };
  
  
  
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
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content8
        id="Content8_0"
        key="Content8_0"
        dataSource={this.Content80DataSource}
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
