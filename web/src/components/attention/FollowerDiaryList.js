import React from 'react';
import ExcellentDiaryPageBody from '../excellentDiary/ExcellentDiaryPageBody';

export default class FollowerDiaryList extends React.Component {

    render() {
        let diarys = [{
            "id": 1,
            "name": 'hhhh',
            "time": '2017-11-02',
            "content": '刚刚听完公开课，又学到了很多东西，虽然我现在对职场还不了解，老师讲的我也有很多没怎么懂，但是，我觉得还是深有感触的，但最印象深刻的是自学和可视化工具，自学，很重要，也是我们必须要的，还有老师说的方法，learn by doing and learn by teaching,我之前学习DOM也是深有体会的，可视化工具我感觉就是要把自己的想法和思路表达出来，然后大家一起交流，找出最好的，主要是交流能力，还有老师说在解决一个问题的时候，要分解，分解成一个一个小任务，然后去完成，还要快速，不断完善，不断迭代，还有好多好多，就有学到好多，都没有办法都写出来，就加油吧！'
        }, {
            "id": 2,
            "name": "黄丽珍",
            "time": 1,
            "content": 'assssss'
        }];

        return <div>
            <ExcellentDiaryPageBody isRecommend="false" diarys={diarys} />
        </div>
    }
}