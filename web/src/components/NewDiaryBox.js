import React from 'react';
import {Card, DatePicker, Row, Col, Input, Button} from 'antd';
import NewDiaryInput from './NewDiaryInput'

export default class NewDiaryBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            time: '',
            content: ''
        };
    }

    render() {
        return <div>
            <Card title={this.props.title}>
                <NewDiaryInput updateContent={this.updateContent.bind(this)} updateTime={this.updateTime.bind(this)}
                               time={this.props.time} input={this.props.input}/>
                <Row>
                    <Col offset={18}>
                        <Button type="primary" size={'small'} style={{margin: 15}}
                                onClick={this.props.modifyDiary}>提交</Button>
                        <Button size={'small'} onClick={this.props.cancelEdit}>取消</Button>
                    </Col>
                </Row>
            </Card>


        </div>
    }
}