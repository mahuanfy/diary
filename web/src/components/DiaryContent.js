import React from 'react';

export default class DiaryContent extends React.Component {

    render() {
        const diaryContent = this.props.diaryContent;
        return <div>
            {diaryContent}

        </div>

    }
};