import React from 'react';
import {Link} from 'react-router-dom';

import {Card, Col} from 'antd';

export default class AttentionList extends React.Component {
    render() {
        const attention = [
            {"id": 1, "name": "黄丽珍", "time": '2017-11-06'},
            {"id": 2, "name": "黄丽", "time": '2017-11-06'},
            {"id": 3, "name": "黄", "time": '2017-11-06'},
            {"id": 4, "name": "黄丽", "time": '2017-11-06'},
            {"id": 5, "name": "黄", "time": '2017-11-06'}];
        let firstName;
        const att = attention.map((ele, index) => {
            // this.props.diarys.filter(diary => diary.userId === ele.userId);
            firstName = ele.name.split('');
            return <Col span={6} offset={2} key={index} style={{marginBottom: 30}}>
                <Link to={'/excellent-diary'}>
                    <div  className="attention">
                        <p className="attention-name">{firstName[0]}</p>
                        <p style={{fontSize: 14, fontWeight: "bold", textAlign: "center"}}>{ele.name}</p>
                        <hr/>
                        <p style={{margin: 10}}>已更新日志：{attention.length}pian</p>
                        <p style={{margin: 10}}>共多少篇文章:{}</p>
                    </div>
                </Link>
            </Col>
        });

        return <div style={{marginTop: 25}}>
            {att}
        </div>
    }
}