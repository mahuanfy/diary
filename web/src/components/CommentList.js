import React from 'react';
import {Input, Button, Row, Col,Collapse} from 'antd';
const Panel = Collapse.Panel;
export default class CommentList extends React.Component {
    render() {
        const comments = [{"id": 1, diaryId:1,"opteror": "张", "comment": "完成的不错哈~不过可以更细致，可以抓紧时间动起来把功能完善了~"}];

        return <div style={{marginTop: 10}}>
            <Row>
                <Col span={20}>
                    <Collapse bordered={false}>
                        <Panel header={'2条评论'} key="1">
                            <p>"ele.opteror"</p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>;
    }
};