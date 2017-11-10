import React from 'react';
import DiaryContent from './DiaryContent';
import NewDiaryBox from './NewDiaryBox';
import {Card, Icon, Button, Row, Col} from 'antd';

import Comment from './Comment';


export default class DiaryView extends React.Component {

    constructor(state) {
        super(state);
        this.state = {
            time: '2017-11-10',
            content:"content",
            editable: false
        }

    }

    modifyDiary() {
        this.setState({editable: true});
    }

    commitDiary() {

    }

    render() {
        const data = this.state.editable ?
            <NewDiaryBox title="修改日志"/>
            :
            <Card title={this.state.time + "的日志"} extra={<Icon type="close"/>}>
                <DiaryContent  diaryContent={this.state.content}/>
                <Row>
                    <Col offset={18}>
                        <Button size={'small'} type="primary" style={{marginRight: "10px"}}
                                onClick={this.modifyDiary.bind(this)}>修改日志</Button>
                        <Button size={'small'} onClick={this.commitDiary}>评论日志</Button>
                    </Col>
                </Row>

            </Card>;
        return <div style={{marginTop: "20px"}}>
            {data}
        </div>;
    }
};