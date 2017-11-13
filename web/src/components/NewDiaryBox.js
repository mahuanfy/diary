import React from 'react';
import {Card,DatePicker,Row,Col,Input,Button} from 'antd';
import NewDiaryInput from './NewDiaryInput'

export default class NewDiaryBox extends React.Component {

    render() {
        return <div>
            <Card title={this.props.title}>
                <NewDiaryInput time={this.props.time} input={this.props.input}/>
                <Row>
                    <Col offset={18}>
                        <Button type="primary" size={'small'} style={{margin:15}}
                                onClick={this.props.modifyDiary}>提交</Button>
                        <Button size={'small'} onClick={this.props.cancelEdit}>取消</Button>
                    </Col>
                </Row>
            </Card>


        </div>
    }
}