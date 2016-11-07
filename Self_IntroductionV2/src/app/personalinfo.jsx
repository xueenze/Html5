import React from 'react';

import './public.css'

import '../../public/images/me.png'

//个人信息
export default class PersonalInfo extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){

    	return(
    		<div className='personalinfo'>
	    		<div className='container'>
	    			<div style={{width:'40%',float:'left',margin:'20px'}}>
	    				<img src={'/images/me.png'} style={{width:'100%'}}></img>
	    			</div>
	    			<div style={{width:'50%',float:'left'}}>
	    				<div className="tag-container">
	    					<ul>
	    						<li className="animated flipInX">诚实</li>
	    						<li className="animated flipInX">老实</li>
	    						<li className="animated flipInX">踏实</li>
	    						<li className="animated flipInX">厚实</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    		<div style={{clear:'both'}}>
	    			<p className='selfinfo animated zoomIn'>
	    				恩泽他毕业于四川大学软件学院软件工程专业，来自辽宁大连，
	    				他是个地道的东北银， 大学本科期间，曾有将近两年的时间在外面打工，实习，工作，
	    				蹉跎中练就一身生存技能， 工作期间接触过Android，JAVA WEB，.NET MVC等主流技术及部分流行的前端框架，
	    				虽不能说见多识广，但至少还算是在匍匐中成长。 没啥远大抱负，也不会想有朝一日征服互联网的圈子，
	    				更不会天天YY脏脏的事情，目前就职于深圳腾讯科技，在TEG的圈子里苦苦支撑着他自己的节操和技术。
	    				曾经扛过服务器，做过报表，演过小节目，唱过情歌，抽烟喝酒，泡妞吹逼，他是不愿意承认的，
	    				如今生活在大深圳，做一个小小的自己，每天都在为了以后的奶粉钱默默努力着。
	    				敢说能为现在的兄弟两肋插刀，也敢说能为以后的女友做牛做马，不求大富大贵，但求问心无愧！
	    			</p>
	    		</div>
    		</div>
    	);
    }
}

