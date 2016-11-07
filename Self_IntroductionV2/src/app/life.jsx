import React from 'react';

import { Grid } from 'antd-mobile';

import './public.css'

import '../../public/images/life1.png'
import '../../public/images/life2.png'
import '../../public/images/life3.png'
import '../../public/images/life4.png'
import '../../public/images/life5.png'
import '../../public/images/life6.png'
import '../../public/images/life7.png'

//生活
export default class Life extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){
        const data1 = [
          {
            img: 'images/life1.png',
            text: '是我'
          },
          {
            img: 'images/life2.png',
            text: '是我'
          },
          {
            img: 'images/life3.png',
            text: '是我'
          },
          {
            img: 'images/life4.png',
            text: '是我'
          },
          {
            img: 'images/life5.png',
            text: '是我'
          },
          {
            img: 'images/life6.png',
            text: '是我'
          },
          {
            img: 'images/life7.png',
            text: '是我'
          }
        ];

    	return(
    		<div>
                <Grid
                    data={data1}
                    columnNum={1}
                    hasLine={false}
                    renderItem={(dataItem, index) => (
                      <div style={{ margin: '16px', background: '#f7f7f7', textAlign: 'center' }}  className="animated slideInUp">
                        <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px' }}>
                          <span>{index + 1}.{dataItem.text}</span>
                        </div>
                        <img src={dataItem.img} style={{ width: '90%', margin: '20px' }} />
                      </div>
                    )}
                />
            </div>
    	);
    }
}

