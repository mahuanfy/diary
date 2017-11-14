import React from 'react';
import {Input, Button, Row, Col, Collapse} from 'antd';

const Panel = Collapse.Panel;
export default class CommentList extends React.Component {
    render() {
        const comments = this.props.comments;

        const commentList = comments.map((comment, index) => {
            return <p key={index}>{comment.user.name + ":" + comment.comment}</p>
        })

        return <div style={{marginTop: 10}}>
            <Row>
                <Col span={20}>
                    <Collapse bordered={false}>
                        <Panel header={comments.length+"条评论"} key="1">
                            {commentList}
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>;
    }
};