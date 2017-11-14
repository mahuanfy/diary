import React from 'react';
import {Card, DatePicker, Row, Col, Input, Button} from 'antd';
import NewDiaryInput from './NewDiaryInput'

export default class NewDiaryBox extends React.Component {


    constructor(props) {
        super(props);
        const time = props.time;
        const id = props.id;
        const userId = props.userId;
        this.state = {
            id,
            time,
            userId,
            content: props.input
        };
    }

    updateContent(content) {
        this.setState({content})
    }

    updateTime(time) {
        this.setState({time})
    }

    modify() {
        this.props.modifyDiary({...this.state});
        this.props.cancelEdit();
    }

    render() {
        const diary = {...this.state}

        return <div>
            <Card title={this.props.title}>
                <NewDiaryInput updateContent={this.updateContent.bind(this)}
                               updateTime={this.updateTime.bind(this)}
                               time={this.props.time} input={this.props.input}/>
                <Row>
                    <Col offset={18}>
                        <Button type="primary" size={'small'} style={{margin: 15}}
                                onClick={this.props.status === "edit" ?
                                    this.modify.bind(this)
                                    :
                                    this.props.submitDiary.bind(this, diary)}>提交</Button>
                        <Button size={'small'} onClick={this.props.cancelEdit}>取消</Button>
                    </Col>
                </Row>
            </Card>


        </div>
    }
}
