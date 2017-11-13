import React from 'react';
import {Button, Menu, Dropdown, Icon} from 'antd';

export default class UserInfo extends React.Component {
    handleMenuClick(e) {
        console.log('click', e);
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">个人中心</Menu.Item>
                <Menu.Item key="3">退出</Menu.Item>
            </Menu>
        );
        return <div>
            <Dropdown overlay={menu}>
                <Button>
                    admin <Icon type="down"/>
                </Button>
            </Dropdown>
        </div>
    }
};