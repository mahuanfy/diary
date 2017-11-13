import React from 'react'
import {Col, Row, Input, DatePicker} from 'antd';
import moment from 'moment';
const {TextArea} = Input;

export default class NewDiaryInput extends React.Component {

    render() {
        return <div>
            <Row>
                <Col span={2}>日期： </Col>
                <DatePicker defaultValue={moment(this.props.time)}/>
            </Row>
            <Row style={{margin: "10px 0"}}>
                <Col span={2}>总结内容：  </Col>
                <Col span={22}>
                    <TextArea value={this.props.input} style={{width: 1000}} autosize={{minRows: 4, maxRows: 6}}/>
                </Col>
            </Row>
        </div>
    }
}