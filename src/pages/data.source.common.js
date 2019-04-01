import img_logo_header from '../assets/logo_header.png'

// * Header 的定义 
export const HeaderNavDataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: img_logo_header,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '产品与服务', href: '/products' } },
      // { name: 'item2', a: { children: '客户与案例', href: '/solutions' } },
      { name: 'item3', a: { children: '大事记', href: '/history' } },
      { name: 'item4', a: { children: '关于我们', href: '/aboutus' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};


// * Footer 的定义 
export const FooterDataSource = {
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


// 产品与服务需要显示的内容
export const ProductsDataSource = {
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

