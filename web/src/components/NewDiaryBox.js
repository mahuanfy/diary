import React from 'react';
import {Card,DatePicker,Row,Col,Input,Button} from 'antd';
import NewDiaryInput from './NewDiaryInput'

export default class NewDiaryBox extends React.Component {
    render() {
        return <div>
            <Card title={this.props.title} >
                <NewDiaryInput/>
                <Row>
                    <Col offset={18}>
                        <Button type="primary" size={'small'} style={{marginRight:"10px"}}>提交</Button>
                        <Button size={'small'}  >取消</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    }
}