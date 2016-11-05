import React from 'react';

import { Grid } from 'antd-mobile';

//生活
export default class Life extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){
        const data1 = [
          {
            icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: '名字',
            link: 'hehe',
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: '名字',
            link: 'hehe',
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: '名字',
            link: 'hehe',
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: '名字',
            link: 'hehe',
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: '名字',
            link: 'hehe',
          },
        ];

    	return(
    		<div>
                <Grid
                    data={data1}
                    columnNum={2}
                    hasLine={false}
                    renderItem={(dataItem, index) => (
                      <div style={{ margin: '16px', background: '#f7f7f7', textAlign: 'center' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px' }}>
                          <span>{index + 1}.{dataItem.text}</span>
                        </div>
                        <img src={dataItem.img} style={{ width: '80%', margin: '12px' }} />
                      </div>
                    )}
                />
            </div>
    	);
    }
}

