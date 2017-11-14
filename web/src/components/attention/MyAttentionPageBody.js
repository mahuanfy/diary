import React from 'react';
import '../../css/App.css'
import AttentionList from './AttentionList';
import {Icon, Row, Col, Card, Button, Input, message, AutoComplete} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as followerAction from "../../actions/attention";

const Option = AutoComplete.Option;


const Search = Input.Search;

class MyAttentionPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };

    }

    componentWillMount() {
        this.props.hasFollowers(this.props.user.id);
    }

    followOrCancel(followerId, oper) {
        oper === "follow" ? this.props.follow({userId: this.props.user.id, followerId})
            : this.props.unfollow({userId: this.props.user.id, followerId});
    }

    searchResult(query) {
        let users = this.props.users.filter(user => user.name.includes(query));
        return users
            .map((user, idx) => {
                return {
                    name: user.name,
                    category: ``,
                    index: `${idx}`,
                    operation: this.props.followers.find(follower => follower.id === user.id) !== undefined
                        ?
                        <a style={{float: "right"}} onClick={this.followOrCancel.bind(this, user.id, 'cancel')}>取消关注</a>
                        : <a style={{float: "right"}} onClick={this.followOrCancel.bind(this, user.id, 'follow')}>关注</a>
                }
            });
    }

    renderOption(item) {
        return (
            <Option key={item.index} text={item.category}>
                {item.name}{item.operation}
            </Option>
        );
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: value ? this.searchResult(value) : [],
        });
    }

    render() {
        const {dataSource} = this.state;

        return <div>
            <Row>
                <Col offset={7} span={8}>
                    <div className="global-search-wrapper" style={{width: 300}}>
                        <AutoComplete
                            className="global-search"
                            size="large"
                            style={{width: '100%'}}
                            dataSource={dataSource.map(this.renderOption.bind(this))}
                            onSearch={this.handleSearch.bind(this)}
                            placeholder="请输入需要关注的用户的用户名"
                            optionLabelProp="text"
                        >
                            <Input
                                suffix={(
                                    <Button className="search-btn" size="large" type="primary">
                                        <Icon type="search"/>
                                    </Button>
                                )}
                            />
                        </AutoComplete>
                    </div>
                </Col>
            </Row>
            <AttentionList followersDiaries={this.props.followersDiaries}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Login.login,
        users: state.Login.users,
        followers: state.Attention.followers,
        followersDiaries: state.Attention.followersDiaries
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hasFollowers: (userId) => {
            dispatch(followerAction.getAllFollowers(userId));
        },
        follow: (follow) => {
            dispatch(followerAction.follow(follow))
        },
        unfollow: (follow) => {
            dispatch(followerAction.unfollow(follow))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyAttentionPageBody))
