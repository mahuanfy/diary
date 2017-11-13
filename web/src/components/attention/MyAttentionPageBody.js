import React from 'react';
import '../../css/App.css'
import AttentionList from './AttentionList';

import {Icon, Row, Col, Card, Button, Input, AutoComplete} from 'antd';

const Option = AutoComplete.Option;


const Search = Input.Search;

export default class MyAttentionPageBody extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [{id: 1, name: "aaa"}, {id: 2, name: "qeqe"}, {id: 3, name: "aaaasd"}],
            followers: [{userId: 2, name: "qeqe"}, {userId: 3, name: "aaaasd", followerId: 8}],
            dataSource: [],
            user: {id: 8, name: "aaa"}
        };

    }

    onSelect(value) {
        console.log('onSelect', value);
    }

    getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
    }

    searchResult(query) {
        let users = this.state.users.filter(user => user.name.includes(query));
        let find = this.state.followers.find(follower => follower.followerId === this.state.user.id);
        console.log(find);
        return users
            .map((item, idx) => ({
                name: item.name,
                category: `${query}${idx}`,
                operation: this.state.followers.find(follower => follower.followerId === this.state.user.id)
                    ? "cancel follower"
                    : "follower"
            }));
    }

    renderOption(item) {
        return (
            <Option key={item.category} text={item.category}>
                {item.name} <a>{item.operation}</a>
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
                            onSelect={this.onSelect.bind(this)}
                            onSearch={this.handleSearch.bind(this)}
                            placeholder="input here"
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
            <AttentionList/>
        </div>
    }
}