import React from 'react';
import { red } from 'ansi-colors';

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
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          title: {
            className: 'content0-title',
            children: 'SAP接口集成管理平台',
          },
          content: {
            children: 'SAP系统常用的对外接口有RFC、IDoc、WebService、FTP等方式。本产品解决外系统与SAP系统进行对接时复杂度过大，且无法管控的问题。',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          title: {
            className: 'content0-title',
            children: '主数据数据分发系统',
          },
          content: {
            children: '解决主数据管理过程中，需要将实时变化的主数据推送给企业内部所有外围应用系统的难题。',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          title: {
            className: 'content0-title',
            children: 'ERP-SO 集成平台',
          },
          content: {
            children: '企业自身或客户拥有订单管理系统，通过此平台可解决它们之间的数据传递及流程管控。',
          },
        },
      },
    ],
  },
};


export const ProductServiceDataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '产品与服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于Microsoft企业级软件产品，并结合蚂蚁金服开源技术为基础',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
            onclick: ()=>{
              this.windows.href = '/xxxx';
            }
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', 
          children: 
            <a href="/products/sap">SAP接口集成管理平台</a>
          },
          content: {
            className: 'content3-content',
            children: 'SAP系统常用的对外接口有RFC、IDoc、WebService、FTP等方式。本产品解决外系统与SAP系统进行对接时复杂度过大，且无法管控的问题。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '主数据数据分发系统' },
          content: {
            className: 'content3-content',
            children: '解决主数据管理过程中，需要将实时变化的主数据推送给企业内部所有外围应用系统的难题。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'ERP/SO集成平台' },
          content: {
            className: 'content3-content',
            children: '企业自身或客户拥有订单管理系统，通过此平台可解决它们之间的数据传递及流程管控。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云中控' },
          content: {
            className: 'content3-content',
            children:
              '帮助设备制造企业快速搭建设备远程监控的SaaS云服务平台。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '轻资链' },
          content: {
            className: 'content3-content',
            children:
              '帮助企业快速实现资产管理的SaaS云平台。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { 
            className: 'content3-title', 
            children: 
              <a href="/products/xtoms">
                xTOMS-智能制造管理平台
              </a>
          },
          content: {
            className: 'content3-content',
            children:
              '为离散制造企业提供标准化业务操作流程管理平台，实现整个生产制造全过程数据化管理。',
          },
        },
      },
    ],
  },
};
