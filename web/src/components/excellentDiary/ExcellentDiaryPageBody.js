import React from 'react';
import {Card, Button, Row, Col, Collapse} from 'antd';
import Comment from '../Comment';

const Panel = Collapse.Panel;

export default class ExcellentDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isComment: false}
    }

    comment = () => {
        this.setState({isComment: true})
    };

    cancelComment() {
        this.setState({isComment: false})
    }

    render() {
        const comment = [{"id": 1, "opteror": "张", "comment": "完成的不错哈~不过可以更细致，可以抓紧时间动起来把功能完善了~"}];
        const com = comment.map((ele, index) => {
            return <div key={index} style={{marginTop: 10}}>
                <Row>
                    <Col span={20}>
                        <Collapse bordered={false}>
                            <Panel header={comment.length + '条评论'} key="1">
                                <p>{ele.opteror}(@{ele.opteror})说:{ele.comment}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        });

        const excellentDiary = [{
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
        const excellent = excellentDiary.map((ele, index) => {
            return <div key={index} style={{marginTop: 20}}>
                <Card title={ele.name + ' 的日志'} extra={ele.time}>
                    <p>{ele.content}</p>
                    <Row>
                        <Col span={3}>查看全文</Col>
                        <Col offset={22} style={{marginTop: 20}}>
                            <Button type="primary" size={'small'} ghost onClick={this.comment}>评论日志</Button>
                        </Col>
                    </Row>

                    {this.state.isComment ? <Comment cancelComment={this.cancelComment.bind(this)}/> : ''}
                    {com}

                </Card>
            </div>
        });

        return <div>
            {excellent}
        </div>
    }
}