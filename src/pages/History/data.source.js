import React from 'react';

import img_20190315 from '../../assets/history/20190315.jpg';
import img_20190310 from '../../assets/history/20190310.jpg';
import img_20190305 from '../../assets/history/20190305.jpg';
import img_20180803 from '../../assets/history/20180803.jpg';
import img_20180410 from '../../assets/history/20180410.jpg';
import img_20170801 from '../../assets/history/20170801.jpg';
import img_20170701 from '../../assets/history/20170701.jpg';

/*
export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '' } },
      { name: 'item1', a: { children: '产品与服务', href: '' } },
      { name: 'item2', a: { children: '客户与案例', href: '' } },
      { name: 'item3', a: { children: '关于我们', href: '' } },
      {
        name: 'item~jtc6t0gf9tf',
        a: {
          children: (
            <span>
              <br />
            </span>
          ),
          href: '',
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

*/


export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            公司大事记
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    "children": [
      {
        "name": "block0",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20190315
          },
          "icon": {
            "className": "block-icon",
            "children": "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg"
          },
          "name": {
            "className": "block-name",
            "children": "轻资链"
          },
          "post": {
            "className": "block-post",
            "children": "深圳"
          },
          "time": {
            "className": "block-time",
            "children": "2019-03-15"
          },
          "title": {
            "className": "block-title",
            "children": "获得可信区块链推进计划全权成员资质"
          },
          "content": { "className": "block-content", 
            "children": 
              <span>经过尽半年时间的严格审核，“轻资链”最终成为国家可信区块链计划的成功，并颁发了全权成员资质证书。“可信区块链推进计划”成员已发展225家，成立了包括标准与评测、开源社区、区域链即服务、区块链安全、工业应用、电信应用、溯源应用、供应链金融、知识产权等在内的11个项目组，得到业界的广泛认可。</span>
         }
        }
      },
      {
        "name": "block0",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20190305
          },
          "icon": {
            "className": "block-icon",
            "children": "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg"
          },
          "name": {
            "className": "block-name",
            "children": "荣昌某房地产开发商"
          },
          "post": {
            "className": "block-post",
            "children": "重庆"
          },
          "time": {
            "className": "block-time",
            "children": "2019-03-05"
          },
          "title": {
            "className": "block-title",
            "children": "房地产物料管理合作洽谈会"
          },
          "content": { "className": "block-content", 
            "children": 
              <span>吴总在谢总的安排下，在重庆荣昌考查了三处由旧到新、由小到大的项目。在方案讨论会上，吴总给出了针对企业在物业管理项目上、未来的发展方向，以及目前可行的优化提升方案。考察参观结束后，双方达成了战略发展合作意向。此处活动，为“回家”在中型房地产管理行业中迈出了新的一步。</span>
         }
        }
      },
      {
        "name": "block0",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20190310
          },
          "icon": {
            "className": "block-icon",
            "children": "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg"
          },
          "name": {
            "className": "block-name",
            "children": "法国某世界500强企业广州工厂"
          },
          "post": {
            "className": "block-post",
            "children": "广州"
          },
          "time": {
            "className": "block-time",
            "children": "2019-02-25"
          },
          "title": {
            "className": "block-title",
            "children": "法国某世界500强企业广州工厂 P+ 1.0 Go-live"
          },
          "content": { "className": "block-content", 
            "children": 
              <span>经过4个月的需求调研，以及尽3个月的系统开发和测试，法国某客户（世界500强）的 P+ 于今天正式上线。日活用户86，日均创建合同18个，日均生成销售订单64个。</span>
         }
        }
      },
      {
        "name": "block1",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20180803
          },
          "icon": {
            "className": "block-icon",
            "children": "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg"
          },
          "name": {
            "className": "block-name",
            "children": "法国某世界500强企业广州工厂"
          },
          "post": {
            "className": "block-post",
            "children": "广州"
          },
          "time": {
            "className": "block-time",
            "children": "2018-07-01"
          },
          "title": {
            "className": "block-title",
            "children": "法国某世界500强企业广州工厂 P+ 1.0 Kick-off"
          },
          "content": {
            "className": "block-content",
            "children": 
              <span>
                经过尽2个月商务投标及合同谈判，我方再次顺利拿到法国某客户（世界500强） P+的实施项目。于2018年7月1日在客户北京总部进行了项目启动。
              </span>
          }
        }
      },
      {
        "name": "block2",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20180410
          },
          "icon": {
            "className": "block-icon",
            "children":
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg"
          },
          "name": {
            "className": "block-name",
            "children": "法国某世界500强企业厦门工厂"
          },
          "post": {
            "className": "block-post",
            "children": "厦门"
          },
          "time": {
            "className": "block-time",
            "children": "2018-03-14"
          },
          "title": {
            "className": "block-title",
            "children": "ETO P+ Go-live"
          },
          "content": {
            "className": "block-content",
            "children": 
              <span>
                经过10个月的项目实施，ETO P+在法国某客户（世界500强）某厦门工厂正式上线。
                ETO P+为客户在智能制造方向上又迈出了重要的一步。
                整个项目从高层领导到终端用户都积极地参与与整个项目的实施过程。
                马总、邓总在整个项目中起来非常重要的决定性作用。
                巍总，刘总与Centeral/Local BPO一起，整理和完善了所有业务需求。
                林总、贾总、孔总在整个项目的过程管理给出了非常重要建议，为项目的正确执行给予了非常大的支持。
                特别要感谢吴总，代表终端用户对系统的需求、功能、设计方面提供了非常重要的实操方案及业务流程设计。
              </span>
          }
        }
      },
      {
        "name": "block3",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20170801
          },
          "icon": {
            "className": "block-icon",
            "children": "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg"
          },
          "name": {
            "className": "block-name",
            "children": "法国某世界500强企北京总部"
          },
          "post": {
            "className": "block-post",
            "children": "北京"
          },
          "time": {
            "className": "block-time",
            "children": "09:00 - 10:00"
          },
          "title": {
            "className": "block-title",
            "children": "ETO P+ Kick-off"
          },
          "content": {
            "className": "block-content",
            "children":
              <span>
                客户集团制定了面向ETO工厂的项目执行规范，并向全球各区域工厂进行推广。
                中国区客户结合自身特点，经过长达两年的分析与研究，结合集团标准化要求，定义了适用于中国国情的生产制造管理流程。
                通过数字化手段，确定成立“ETO P+”项目。
                项目目标建立在实现数字化工厂、标准化业务流程、项目执行过程数据化管理、与ERP系统集成实现订单管理、项目执行自动化，协同各部门业务活动，满足减化业务操作，提高工作效率。
                为企业分析项目本成、项目利润、工作绩效提供数据依据。
              </span>
          }
        }
      },
      {
        "name": "block3",
        "className": "block-wrapper",
        "playScale": 0.3,
        "children": {
          "imgWrapper": { "className": "image-wrapper" },
          "textWrapper": { "className": "text-wrapper" },
          "img": {
            "className": "block-img",
            "children": img_20170701
          },
          "icon": {
            "className": "block-icon",
            "children":
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg"
          },
          "name": {
            "className": "block-name",
            "children": "法国某世界500强企业广州工厂"
          },
          "post": {
            "className": "block-post",
            "children": "广州"
          },
          "time": {
            "className": "block-time",
            "children": "09:00 - 10:00"
          },
          "title": {
            "className": "block-title",
            "children": "法国某世界500强企业广州工厂 Quotation Tool Go-live"
          },
          "content": {
            "className": "block-content",
            "children":
              ""
          }
        }
      },
    ]
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
