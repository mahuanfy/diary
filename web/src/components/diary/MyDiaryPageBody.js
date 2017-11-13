import React from 'react';
import NewDiaryBox from '../NewDiaryBox';
import DiaryListBox from '../DiaryListBox';
import moment from 'moment';
import {connect} from 'react-redux';

const dateFormat = 'YYYY-MM-DD'

class MyDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            time: moment(new Date(), dateFormat).toString(),
            title: '新的日志',
            input: '## 我做了什么\n' +
            '## 学了什么\n' +
            '## 有什么印象深刻的收获'
        };
    }

    cancelEdit() {

    }

    submitDiary(time, content) {
        console.log(time);
    }

    render() {
        console.log(this.props.userId)
        return <div>
            <NewDiaryBox title={this.state.title}
                         time={this.state.time}
                         input={this.state.input}
                         cancleEdit={this.cancelEdit.bind(this)}
                         submitDiary={this.submitDiary.bind(this)}/>
            <DiaryListBox/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDiary: () => {

        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDiaryPageBody);