import React from 'react';
import {Card, Icon, Button, Row, Col, DatePicker, Input, Popconfirm, message} from 'antd';
import NewDiaryBox from "./NewDiaryBox";
import NewDiaryInput from "./NewDiaryInput";
import Comment from './Comment';
import moment from 'moment';

const {TextArea} = Input;
const dateFormat = 'YYYY-MM-DD';

export default class DiaryListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            isComment: false,
            time: '2017-11-02',
            input: '',
            title: '',
            editId: 0
        }
    }

    confirm() {
        message.success("delete successful");
    };

    editDiary(id, time, content) {
        this.setState({title: '修改成长日志', editable: true, editId: id, time: time, input: content});
    }

    cancelEdit() {
        this.setState({editable: false});
    }

    modifyDiary(id) {
        this.props.modifyDiary();
    }

    commentDiary() {
        this.setState({isComment: true})
    }

    cancelComment() {
        this.setState({isComment: false})
    }

    render() {
        const Diary = [{"id": 1, "time": '2017-11-02', "content": 'assssss'}, {
            "id": 2,
            "time": 1,
            "content": 'assssss'
        }];


        const diarys = Diary.map((ele, index) => {
            return (

                <div key={index} style={{marginTop: 20}}>
                    {
                        this.state.editable && (this.state.editId === ele.id) ?
                            <NewDiaryBox title={this.state.title} time={this.state.time} input={this.state.input}
                                         modifyDiary={this.modifyDiary.bind(this, 1)}
                                         cancelEdit={this.cancelEdit.bind(this)}/>
                            :
                            <Card title={ele.time + "的日志"}
                                  extra={<Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                                                     onConfirm={this.confirm}><a
                                      href="#"> X </a></Popconfirm>}>
                                <p>{ele.content}</p>
                                <Row>
                                    <Col offset={18}>
                                        <Button size={'small'} type="primary" style={{marginRight: "10px"}}
                                                onClick={this.editDiary.bind(this, ele.id, ele.time, ele.content)}>修改日志</Button>
                                        <Button size={'small'} onClick={this.commentDiary.bind(this)}>评论日志</Button>
                                    </Col>
                                </Row>
                                {
                                    this.state.isComment ? <Comment cancelComment={this.cancelComment.bind(this)}/> : ''
                                }
                            </Card>
                    }
                </div>)
        });


        return <div style={{marginTop: 20}}>
            {diarys}
        </div>
    }
};