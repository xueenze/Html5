import React from 'react';

import './public.css'

//技能
export default class Skills extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){

    	return(
    		<div className="skill animated swing">
                <div className="title">Skills</div>
    			<div className="meter midnight">
                    <span style={{width: '80%'}}><span>JavaScript</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '70%'}}><span>Html</span></span>
                </div>
                <div className="meter asbestos">
                    <span style={{width: '60%'}}><span>CSS</span></span>
                </div>
                <div className="meter emerald">
                    <span style={{width: '50%'}}><span>C#</span></span>
                </div>
                <div className="meter carrot">
                    <span style={{width: '45%'}}><span>PHP</span></span>
                </div>
                <div className="meter wisteria">
                    <span style={{width: '45%'}}><span>JAVA</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '35%'}}><span>C++</span></span>
                </div>

                <br />
                <div className="title">前端框架/库</div>
                <div className="meter midnight">
                    <span style={{width: '80%'}}><span>Vue</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '70%'}}><span>JQuery</span></span>
                </div>
                <div className="meter wisteria">
                    <span style={{width: '60%'}}><span>NodeJS</span></span>
                </div>
                <div className="meter asbestos">
                    <span style={{width: '50%'}}><span>Angular</span></span>
                </div>
                <div className="meter emerald">
                    <span style={{width: '40%'}}><span>React</span></span>
                </div>
                <div className="meter carrot">
                    <span style={{width: '39%'}}><span>Ant-Design</span></span>
                </div>
                <div className="meter sunflower">
                    <span style={{width: '38%'}}><span>WeUI</span></span>
                </div>
                <div className="meter midnight">
                    <span style={{width: '36%'}}><span>Vux</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '35%'}}><span>Vue-Weui</span></span>
                </div>

                <br />
                <div className="title">后端框架/库</div>
                <div className="meter midnight">
                    <span style={{width: '80%'}}><span>.Net Framework 4</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '70%'}}><span>.Net WebMVC</span></span>
                </div>
                <div className="meter wisteria">
                    <span style={{width: '60%'}}><span>Entity Framework</span></span>
                </div>
                <div className="meter asbestos">
                    <span style={{width: '50%'}}><span>YAF</span></span>
                </div>
                <div className="meter emerald">
                    <span style={{width: '45%'}}><span>Web Service</span></span>
                </div>
                <div className="meter pomengrate">
                    <span style={{width: '44%'}}><span>Restful API</span></span>
                </div>
                <div className="meter carrot">
                    <span style={{width: '40%'}}><span>WCF</span></span>
                </div>

                <br />
                <div　className="title">IDE</div>
                <div className="meter carrot">
                    <span style={{width: '80%'}}><span>Sublime Text</span></span>
                </div>
                <div className="meter emerald">
                    <span style={{width: '70%'}}><span>Visual Studio 2013</span></span>
                </div>
                <div className="meter wisteria">
                    <span style={{width: '60%'}}><span>Ubuntu</span></span>
                </div>
                <div className="meter sunflower">
                    <span style={{width: '50%'}}><span>Eclipse</span></span>
                </div>
    		</div>
    	);
    }
}

