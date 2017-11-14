import React from 'react';
import NewDiaryBox from '../NewDiaryBox';
import DiaryListBox from '../DiaryListBox';
import moment from 'moment';
import {connect} from 'react-redux';
import * as diaryActions from '../../actions/diary';
import diary from "../../reducers/diary";

const dateFormat = 'YYYY-MM-DD';

class MyDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(new Date()).format(dateFormat),
            title: '新的日志',
            input: '## 我做了什么\n' +
            '## 学了什么\n' +
            '## 有什么印象深刻的收获'
        };
    }

    componentWillMount() {
        this.props.getAllDiaries(this.props.user)
    }

    cancelEdit() {
        this.setState({input: " "})
    }

    submitDiary(newDiary) {
        this.props.addDiary({...newDiary, userId: this.props.user.id});
    }

    render() {
        const diaries = this.props.diaries;
        return <div>
            <NewDiaryBox title={this.state.title}
                         time={this.state.time}
                         input={this.state.input}
                         status="add"
                         modifyDiary={this.props.modifyDiary}
                         cancelEdit={this.cancelEdit.bind(this)}
                         submitDiary={this.submitDiary.bind(this)}/>

            <DiaryListBox diaries={diaries}
                          modifyDiary={this.props.modifyDiary}
                          deleteDiary={this.props.deleteDiary}
                          comment={this.props.comment}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Login,
        diaries: state.Diary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDiary: (diary) => {
            dispatch(diaryActions.addDiary(diary));
        }
        ,
        getAllDiaries: (student) => {
            dispatch(diaryActions.getAllDiary(student.id));
        },
        deleteDiary: (diary) => {
            dispatch(diaryActions.deleteDiary(diary));
        },
        modifyDiary: (diary) => {
            dispatch(diaryActions.modifyDiary(diary));
        },
        comment:(comment)=>{
            dispatch(diaryActions.commentDiary(comment))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDiaryPageBody);