import React from 'react'
import {Col, Row, Input, DatePicker} from 'antd';
import moment from 'moment';

const {TextArea} = Input;

export default class NewDiaryInput extends React.Component {

    onChange(date, dateString) {

    }

    render() {
        return <div>
            <Row>
                <Col span={2}>日期： </Col>
                <DatePicker defaultValue={moment(this.props.time)}
                            onChange={(date, dateString) => {
                                this.props.updateTime(dateString)
                            }}/>
            </Row>
            <Row style={{margin: "10px 0"}}>
                <Col span={2}>总结内容： </Col>
                <Col span={22}>
                    <TextArea defaultValue={this.props.input} style={{width: 1000}}
                              autosize={{minRows: 4, maxRows: 6}}
                              onChange={e => this.props.updateContent(e.target.value)}/>
                </Col>
            </Row>
        </div>
    }
}