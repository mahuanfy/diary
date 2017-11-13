import React from 'react';
import NewDiaryBox from '../NewDiaryBox';
import DiaryListBox from '../DiaryListBox';

export default class MyDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '新的日志',
            input:'## 我做了什么\n' +
            '## 学了什么\n' +
            '## 有什么印象深刻的收获'
        }
    }
    cancelEdit(){

    }

    render() {
        return <div>
            <NewDiaryBox title={this.state.title} input={this.state.input} cancleEdit={this.cancelEdit.bind(this)}/>
            <DiaryListBox/>
        </div>
    }
}