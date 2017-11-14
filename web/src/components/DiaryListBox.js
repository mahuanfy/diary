import React from 'react';
import {Card, Icon, Button, Row, Col, DatePicker, Input, Popconfirm, message} from 'antd';
import NewDiaryBox from "./NewDiaryBox";
import Comment from './CommentInput';
import moment from 'moment';
import {connect} from 'react-redux';
import * as diaryActions from '../actions/diary';

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
            editId: 0,
            commentId: 0
        }
    }


    editDiary(id, time, content) {
        this.setState({title: '修改成长日志', editable: true, editId: id, time: time, input: content});
    }

    cancelEdit() {
        this.setState({editable: false});
    }

    commentDiary(id) {
        this.setState({isComment: true, commentId: id})
    }

    cancelComment() {
        this.setState({isComment: false})
    }

    render() {

        const diaries = this.props.diaries.map((ele, index) => {
            return (

                <div key={index} style={{marginTop: 20}}>
                    {
                        this.state.editable && (this.state.editId === ele.id) ?
                            <NewDiaryBox title={this.state.title}
                                         time={this.state.time}
                                         input={this.state.input}
                                         id={ele.id}
                                         userId={ele.userId}
                                         status="edit"
                                         modifyDiary={this.props.modifyDiary}
                                         submitDiary={this.props.submitDiary}
                                         cancelEdit={this.cancelEdit.bind(this)}/>
                            :
                            <Card title={moment(ele.time).format(dateFormat) + "的日志"}
                                  extra={<Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                                                     onConfirm={this.props.deleteDiary.bind(this, ele)}><a
                                      href="#"> X </a></Popconfirm>}>
                                <p>{ele.content}</p>
                                <Row>
                                    <Col offset={18}>
                                        <Button size={'small'} type="primary" style={{marginRight: "10px"}}
                                                onClick={this.editDiary.bind(this, ele.id, ele.time, ele.content)}>修改日志</Button>
                                        <Button size={'small'}
                                                onClick={this.commentDiary.bind(this, ele.id)}>评论日志</Button>
                                    </Col>
                                </Row>
                                {
                                    this.state.isComment && (this.state.commentId === ele.id) ?
                                        <Comment diary={ele} comment={this.props.comment}
                                                 cancelComment={this.cancelComment.bind(this)}/> : ''
                                }
                            </Card>
                    }
                </div>)
        });


        return <div style={{marginTop: 20}}>
            {diaries}
        </div>
    }
};
