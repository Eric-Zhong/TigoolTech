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
import Content6 from '../../components/Content6';

import {
  HeaderNavDataSource,
  FooterDataSource,
} from '../data.source.common';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;



const xtomsDataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'xTOMS - 智能制造执行管理系统',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于多家世界500强制造企业的管理经验，为离散制造企业提供端到端的生产制造数据化管理平台',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '售前阶段' },
        content: {
          className: 'content6-content',
          children: 
            <p>市场活动，机会收集，客户管理，机会决策。</p>
        },
      },
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '销售阶段' },
        content: {
          className: 'content6-content',
          children: 
            <p>机会备案，立项决策，投标决策，投标准备，需求分析，问题澄清，风险识别，投标方案确立，投标文件管理，评标管理，合同谈判，偏差分析，合同审签，合同移交。</p>
        },
      },
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '执行阶段' },
        content: {
          className: 'content6-content',
          children: 
            <p>合同交接，项目启动，执行计划，结构设计，电气设计，系统设计，长交期物料，半成品，总装，预排产，FAT，验收，库存，信控，装箱单，发货，开箱，安全调度，质保。</p>
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '生产阶段' },
        content: {
          className: 'content6-content',
          children:
            <p>计划BOM，完整BOM，包装，发货，物流跟踪，验货签收。</p>
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '供应链阶段' },
        content: {
          className: 'content6-content',
          children:
            <p>合同交接，项目启动，风险识别，执行计划，任务分派，设计确认，物料采购需求，BOM下发，生产任务创建，排产，包装，发货，物流跟踪，验货签收。</p>
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '质保阶段' },
        content: {
          className: 'content6-content',
          children:
            <p>现场安装服务管理，产品质保管理，设备维护管理，现场工单管理，项目关闭。</p>
        },
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
      <Content6
        id="Content6"
        key="Content6_0"
        dataSource={xtomsDataSource}
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
