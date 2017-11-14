import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import {Card, Col} from 'antd';

export default class AttentionList extends React.Component {
    render() {
        const attention = this.props.followersDiaries;
        let firstName;
        const att = attention.map((ele, index) => {
            firstName = ele.follower.name.split('');
            return <Col span={6} offset={2} key={index} style={{marginBottom: 30}}>
                <Link to={'/excellent-diary'}>
                    <div className="attention">
                        <p className="attention-name">{firstName[0]}</p>
                        <p style={{
                            fontSize: 14, fontWeight: "bold", textAlign: "center",
                            paddingBottom: 5, borderBottom: "solid .5px"
                        }}>{ele.follower.name}</p>
                        <p style={{margin: 10}}>已更新日志：{ele.diaries.length}篇</p>
                        <p style={{margin: "0 10px"}}>
                            最近一次更新时间:{ele.diaries.length > 0 ?
                            moment(ele.diaries[0].time).format("YYYY-MM-DD")
                            : ""}</p>
                    </div>
                </Link>
            </Col>;
        });

        return <div style={{marginTop: 25}}>
            {att}
        </div>
    }
}