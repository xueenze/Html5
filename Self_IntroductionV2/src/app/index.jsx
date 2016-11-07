import React from 'react';
import ReactDOM from 'react-dom';

// 引入Antd组件
import { Tabs, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;

//引入单个页面（包括嵌套的子页面）
import PersonalInfo from './personalinfo.jsx';
import Skills from './skills.jsx';
import Experience from './experience.jsx';
import Life from './life.jsx';
import More from './more.jsx';

import './public.css'
import '../../public/css/animate.css'

//渲染页面
ReactDOM.render((
  <div className="main">
    <Tabs defaultActiveKey="1">
        <TabPane tab="我" key="1">
          <div className="mytab">
            <PersonalInfo/>
          </div>
        </TabPane>
        <TabPane tab="技能" key="2">
          <div className="mytab">
            <Skills/>
          </div>
        </TabPane>
        <TabPane tab="经历" key="3">
          <div className="mytab">
            <Experience/>
          </div>
        </TabPane>
        <TabPane tab="生活" key="4">
          <div className="mytab">
            <Life/>
          </div>
        </TabPane>
        <TabPane tab="更多的我" key="5">
          <div className="mytab">
            <More/>
          </div>
        </TabPane>
      </Tabs>
  </div>
),document.querySelector('#init'));

