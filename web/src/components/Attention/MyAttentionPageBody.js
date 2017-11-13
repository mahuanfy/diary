import React from 'react';
import {Input, Row, Col, Card} from 'antd';
import '../../css/App.css'

const Search = Input.Search;

export default class MyAttentionPageBody extends React.Component {
    render() {
        const attention = [
            {"id": 1, "name": "黄丽珍", "time": '2017-11-06'},
            {"id": 2, "name": "黄丽", "time": '2017-11-06'},
            {"id": 3, "name": "黄", "time": '2017-11-06'},
            {"id": 4, "name": "黄丽", "time": '2017-11-06'},
            {"id": 5, "name": "黄", "time": '2017-11-06'}];

        const att = attention.map((ele, index) => {
            return <div className="attention" key={index}>
                <div className="attention-info">
                    <p>{ele.name}</p>
                </div>
                <hr/>
                <p style={{margin:10}}>最近更新时间：</p>
                <p style={{margin:10}}>共多少篇文章:</p>
            </div>
        });

        return <div>
            <Row>
                <Col offset={7} span={8}>
                    <Search style={{marginTop: 30}} size={'large'} placeholder="input search text"
                            onSearch={value => console.log(value)}/>
                </Col>
            </Row>

            <Card style={{marginTop:25}}>
                {att}
            </Card>
        </div>
    }
}