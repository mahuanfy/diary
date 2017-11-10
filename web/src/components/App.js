import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col} from 'antd';
import UserInfo from './UserInfo';
import MyDiaryPageBody from './MyDiaryPageBody';
import '../css/App.css'
import logo from '../images/logo.png'

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col span={21}><img src={logo} className="App-logo" alt="哈哈哈"/></Col>
                        <Col span={3}><UserInfo/></Col>
                    </Row>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{height: '100%'}}
                            >
                                <Menu.Item key="1">
                                    <Icon type="edit"/>
                                    <span>我的日志</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="team"/>
                                    <span>我的关注</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="like-o"/>
                                    <span>优秀日志</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <MyDiaryPageBody/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

export default App;
