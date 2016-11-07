import React from 'react';

import {Card,WingBlank,WhiteSpace} from 'antd-mobile'

import '../../public/images/experience1.png'
import '../../public/images/experience2.png'

import './public.css'

//经验卡片
export default class Experience extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){

    	return(
    		<div className="experience">
            <WingBlank size="lg" className="animated slideInUp">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="应用开发（在职）"
                        thumb="images/experience1.png"
                        extra={<span>腾讯科技有限公司</span>}
                    />
                    <Card.Body>
                        <div>
                        </div>
                    </Card.Body>
                    <Card.Footer content="2015.07 ~ 至今" extra={<div>一年以上</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
            <WingBlank size="lg" className="animated slideInUp">
                <WhiteSpace size="lg" />
                    <Card>
                      <Card.Header
                        title="云开发（实习）"
                        thumb="images/experience2.png"
                        extra={<span>SAP</span>}
                      />
                      <Card.Body>
                        　　<div>他参与BYD系统的二次开发，以及SuccessFactors的二次开发，用着笨拙的英语口语，带着两个小伙伴使用着JAVA WEB的相关技术在SAP做着一些不一样的事情！
                        　　</div>
                      </Card.Body>
                      <Card.Footer content="2015.01 ~ 2015.07" extra={<div>6个月</div>} />
                    </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
            <WingBlank size="lg" className="animated slideInUp">
                <WhiteSpace size="lg" />
                    <Card>
                      <Card.Header
                        title="应用开发（实习）"
                        thumb="images/experience1.png"
                        extra={<span>腾讯科技有限公司</span>}
                      />
                      <Card.Body>
                        　　<div>负责企业内部服务支持，实习期间他主要负责内网相关业务的开发及运营工作，使用到的技术主要是SQL SERVER 2008R2，WCF，.NET，WEB SERVICE，在进行开发工作之前，他并没有C#的相关开发经验，但是入职一星期内便开始接手正式上线任务，并能够较好的在规定时间内完成开发任务，通过测试。
                        　　</div>
                      </Card.Body>
                      <Card.Footer content="2014-07 ~ 2015-01" extra={<div>6个月</div>} />
                    </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
    		</div>
    	);
    }
}

