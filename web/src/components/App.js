import React, {Component} from 'react';
import UserInfo from './Diary/UserInfo';
import MyDiaryPageBody from './Diary/MyDiaryPageBody';
import ExcellentDiaryPageBody from './ExcellentDiary/ExcellentDiaryPageBody';
import MyAttentionPageBody from './Attention/MyAttentionPageBody';

import '../css/App.css'
import logo from '../images/logo.png'
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs, message} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const {TabPane} = Tabs;

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
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Tabs tabPosition={'left'} defaultActiveKey="1">
                                <TabPane tab={<span><Icon type="edit"/> 我的日志</span>}
                                         key="1"><MyDiaryPageBody/></TabPane>
                                <TabPane tab={<span><Icon type="team"/> 我的关注</span>}
                                         key="2"><MyAttentionPageBody/></TabPane>
                                <TabPane tab={<span><Icon type="like-o"/> 优秀日志</span>}
                                         key="3"><ExcellentDiaryPageBody/></TabPane>
                            </Tabs>
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
