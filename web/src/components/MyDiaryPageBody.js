import React from 'react';
import NewDiaryBox from './NewDiaryBox';
import DiaryListBox from './DiaryListBox';

export default class MyDiaryPageBody extends React.Component{
    render(){
        return <div>
            <NewDiaryBox/>
            <DiaryListBox/>
        </div>
    }
}