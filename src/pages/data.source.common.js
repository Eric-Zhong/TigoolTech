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
      { name: 'item1', a: { children: '产品与服务', href: '#' } },
      { name: 'item2', a: { children: '客户与案例', href: '#' } },
      { name: 'item3', a: { children: '关于我们', href: '/history' } }
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
