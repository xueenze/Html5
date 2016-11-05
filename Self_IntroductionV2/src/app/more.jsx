import React from 'react';

import { Accordion, List } from 'antd-mobile';

//更多
export default class More extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){

    	return(
    		<div style={{ marginTop: 10, marginBottom: 10 }}>
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
		          <Accordion.Panel header="我的邮箱">
		          	  <List.Item>kameleon@126.com</List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我的Github">
			          <List.Item>
				          <a href="https://github.com/xueenze">
				              https://github.com/xueenze
				          </a>
			          </List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="我自己的公众号哦">
		          	  <List.Item>
		          	  　　　　<a>
		          	  		  <img src="http://h.hiphotos.baidu.com/image/pic/item/3bf33a87e950352a5936aa0a5543fbf2b2118b59.jpg" style={{ width: '450px',height: '450px' }}></img>
		          	  		  <span>123123</span>
		          	  	  </a>
		          	  </List.Item>
		          </Accordion.Panel>
		        </Accordion>
	      	</div>
    	);
    }
}

