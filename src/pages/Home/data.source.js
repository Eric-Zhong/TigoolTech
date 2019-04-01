import React from 'react';
import img_logo_header from '../../assets/logo_header.png';
import img_logo_home from '../../assets/logo_tigooltech_white.png';
import img_logo_abb from '../../assets/logo_abb.png';
import img_logo_se from '../../assets/logo_se.png';
import img_logo_microsoft from '../../assets/logo_microsoft.png';
import img_logo_vanke from '../../assets/logo_vanke.png';
import img_logo_scpc from '../../assets/logo_scpc.png';
import img_logo_crrc from '../../assets/logo_crrc.png';
import img_logo_5i5j from '../../assets/logo_5i5j.png';
import img_logo_jd from '../../assets/logo_jd.png';

import img_product_biztalk from '../../assets/product_biztalk.png';
import img_product_cloudinnov from '../../assets/product_cloudinnov.png';
import img_product_xtoms from '../../assets/product_xtoms.png';
import img_product_eam from '../../assets/product_eam.png';

export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    // children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    children: img_logo_header,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '#' } },
      { name: 'item1', a: { children: '产品与服务', href: '#' } },
      { name: 'item2', a: { children: '客户与案例', href: '#' } },
      { name: 'item3', a: { children: '大事记', href: '/history' } },
      { name: 'item4', a: { children: '关于我们', href: '#' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: img_logo_home,
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>专注企业级应用集成解决方案，助力企业数字化转型</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>企业系统集成管理平台</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>
                  解决企业中不同应用系统之间的快速集成需求，尤其适用于SAP、EDI等核心业务应用系统的集成。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>企业资产管理SaaS平台</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>
                  帮助企业实现资产管理的标准化数字建模；基于区块链技术实现资产的确立确权，便于未来二手交易。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>云中控设备监控平台</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>
                  基于IoT技术，通过边缘计算设备、免费的SCADA软件，以及设备管理云平台，为设备制造类企业快速搭建设备管理云平台。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~jtbqaiude6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>智能制造信息管理平台</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>
                  帮助企业实现销售管理、报价管理、合同管理、预算管理、订单管理、交付管理，方便管理者跟踪项目执行的全生命周期管理
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: img_product_biztalk,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>BizTalk - 企业应用集成管理平台</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          自带 SAP、EDI、Oracle、SQL、SMTP、SFTP、HTTP、HTTPS、SOAP、RESTFull
          等企业级应用的常用接口适配器，无需开发、只通过配置即可使用。内置业务流程编辑器，提供可视化编程界面，方便企业实现业务流程再造。内建基于XML、Schema的消息处理总线，实现企业中业务数据的订单与分发服务。<span
          >
            我们在BizTalk产品上，从2004年开始，已经提供了 15
            年产品培训、设计、实施及升级服务，多数项目都在企业内部做为核心应用在进行个使用。
          </span>
        </p>
      </span>
    ),
  },
};
export const Content20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: img_product_eam,
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>轻资链 - 资产管理平台</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          严格按照国际、及中国国家标准对资产进行归类及编码，提供一整套企业资产管理的管理方法及管理工具，实现资产的全生命周期管理及进行资产数字化建模，并实现资产的可视化动态分析。我们的产品客户端目前定位成微信小程序，方便企业用户随时随地的进行资产操作，也减轻企业对此系统的维护成功。轻资链基于SaaS方式实现，可以为企业提供多种定制化服务，企业可以按自身实际业务场景定义产品功能。
        </p>
      </span>
    ),
  },
};
export const Content11DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: img_product_cloudinnov,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>云中控 - 设备管理云平台</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children:
      <span>
        “云中控”结合物联网、云计算、大数据技术，以数据为基础、设备为节点、流程为准绳、人员为中心，综合运用物联网、语音识别、图像识别、机器学习、AR等多项最新科技搭建的“云中控”工业物联网设备健康管理SaaS服务平台，为工业企业设备全生命周期管理提供全面技术支持，提高企业生产效率，降低企业运维、融资和备件采购成本。
      </span>
  },
};
export const Content21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: img_product_xtoms,
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>xTOMS - 智能制造信息管理平台</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          xTOMS
          目前处于系统原型验证阶段，已经迭代到第5个版本。产品定位于解决企业在销售阶段、实施阶段及售后阶段，需要对外提高客户满意度，及时反馈商务活动的进展，方便问题跟踪；对内需要将所有执行阶段、各业务活动进行数字化管理，业务活动所产生的交付成果通过此平台进行集中管理。XTOMS
          还将最大限度的与企业已有系统进行系统间的集成，打通各系统之间的壁垒，让各业务部门在一个平台上完成整个商业活动，并且实现业务数据透明化，提高各专业业务人员及时沟通，及时了解业务进展，提高工作效率。
        </p>
      </span>
    ),
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '我们的客户', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '到目前为止我们曾经服务的客户',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              img_logo_abb,
          },
          content: { children: 'ABB' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              img_logo_se,
          },
          content: { children: '施耐德' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            img_logo_scpc,
          },
          content: { children: '中海壳牌' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            img_logo_crrc,
          },
          content: { children: '长春长客' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
             img_logo_vanke,
          },
          content: { children: '万科' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              img_logo_microsoft,
          },
          content: { children: '微软' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              img_logo_5i5j,
          },
          content: { children: '我爱我家' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              img_logo_jd,
          },
          content: { children: '京东' },
        },
      },
    ],
  },
};


export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特别鸣谢', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2019 <a href="#">TigoolTech</a> All Rights
        Reserved
      </span>
    ),
  },
};
