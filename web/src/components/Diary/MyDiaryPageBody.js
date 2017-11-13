import React from 'react';
import NewDiaryBox from '../NewDiaryBox';
import DiaryListBox from '../DiaryListBox';

export default class MyDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '新的日志'
        }
    }
    cancelEdit(){

    }

    render() {
        return <div>
            <NewDiaryBox title={this.state.title} cancleEdit={this.cancelEdit.bind(this)}/>
            <DiaryListBox/>
        </div>
    }
}