import React from 'react';

import { Accordion, List } from 'antd-mobile';

import './public.css'

//更多
export default class More extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){

    	return(
    		<div className='more'>
		        <Accordion
		          defaultActiveKey="0"
		          accordion
		        >
		          <Accordion.Panel header="我的博客">
		              <List.Item>
		            	  <a href="http://blog.csdn.net/kameleon2013">
		            		  http://blog.csdn.net/kameleon2013
		            	  </a>
		              </List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我的Github">
			          <List.Item>
				          <a href="https://github.com/xueenze">
				              https://github.com/xueenze
				          </a>
			          </List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我的邮箱">
		          	  <List.Item>kameleon@126.com</List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我的微信">
		          	  <List.Item>
		          	      <img src={require('../../public/images/more2.png')} 
		          	      	style={{width:'500px',height:'500px'}}></img>
		          	  </List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我自己的公众号哦（快快关注我！）">
		          	  <List.Item>
		          	      <img src={require('../../public/images/more1.png')} 
		          	      	style={{width:'500px',height:'500px'}}></img>
		          	  </List.Item>
		          </Accordion.Panel>
		        </Accordion>
	      	</div>
    	);
    }
}

