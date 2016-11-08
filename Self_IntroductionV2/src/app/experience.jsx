import React from 'react';

import {Card,WingBlank,WhiteSpace} from 'antd-mobile'

import '../../public/images/experience1.png'
import '../../public/images/experience2.png'
import '../../public/images/experience3.png'
import '../../public/images/experience4.png'

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
                            title="玩起了公众号"
                            thumb="images/experience4.png"
                        />
                        <Card.Body>
                            <div>和好兄弟玩起了公众号，不到一个月将粉丝增加到了400+</div>
                        </Card.Body>
                        <Card.Footer content="2016.10 ~ 至今"/>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg" className="animated slideInUp">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="应用开发（在职）"
                            thumb="images/experience1.png"
                            extra={<span>腾讯科技有限公司</span>}
                        />
                        <Card.Body>
                            <div>小开发，前进着，学习着，也在迷茫着</div>
                        </Card.Body>
                        <Card.Footer content="2015.07 ~ 至今"/>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg" className="animated slideInUp">
                    <WhiteSpace size="lg" />
                        <Card>
                          <Card.Header
                            title="我的第二份实习"
                            thumb="images/experience2.png"
                            extra={<span>SAP</span>}
                          />
                          <Card.Body>
                            　　<div>小开发，前进着，也认识了一帮有趣的人</div>
                          </Card.Body>
                          <Card.Footer content="2015.01 ~ 2015.07"/>
                        </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg" className="animated slideInUp">
                    <WhiteSpace size="lg" />
                        <Card>
                          <Card.Header
                            title="我的第一份实习"
                            thumb="images/experience1.png"
                            extra={<span>腾讯科技有限公司</span>}
                          />
                          <Card.Body>
                            　　<div>小开发，初入职场，匍匐前进着</div>
                          </Card.Body>
                          <Card.Footer content="2014-07 ~ 2015-01"/>
                        </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg" className="animated slideInUp">
                    <WhiteSpace size="lg" />
                        <Card>
                          <Card.Header
                            title="我毕业了"
                            thumb="images/experience3.png"
                            extra={<span>四川大学</span>}
                          />
                          <Card.Body>
                            　　<div>毕业了，工作了，迷茫了</div>
                          </Card.Body>
                          <Card.Footer content="2011-09 ~ 2015-07"/>
                        </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
    		</div>
    	);
    }
}

