import React from 'react'
import {Col,Row,Input,DatePicker} from 'antd';
const { TextArea } = Input;

export default class NewDiaryInput extends React.Component{

    render(){
        return<div>
            <Row >
                <Col span={20} offset={1}>
                    日期  <DatePicker/>
                </Col>
            </Row>
            <Row style={{margin:"10px 0"}}>
                <Col span={2} >总结内容 </Col>
                <Col span={22}>
                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                </Col>
            </Row>
        </div>
    }
}