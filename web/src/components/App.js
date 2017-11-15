import React, {Component} from 'react';
import UserInfo from './diary/UserInfo';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import '../css/App.css'
import logo from '../images/logo.png'
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs, message} from 'antd';
import {student, tutor} from '../constants/UserAccount';
import * as actions from '../actions/user';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const {TabPane} = Tabs;

class App extends Component {
    constructor() {
        super();
        this.state = {
            pathName: "成长日志"
        }
    }

    componentWillMount() {
        // this.props.login(student);
        this.props.login(tutor);
        this.props.getAllUser();
    }

    path(pathName) {
        this.setState({pathName});
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col span={21}><img src={logo} className="App-logo" alt="哈哈哈"/></Col>
                        <Col span={3}><UserInfo user={this.props.user}/></Col>
                    </Row>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>思特沃克学院</Breadcrumb.Item>
                        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.pathName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu mode="inline"
                                  defaultSelectedKeys={['1']}
                                  defaultOpenKeys={['sub1']}
                                  style={{height: '100%'}}>
                                <Menu.Item key="1">
                                    <Link to={'/diary'} onClick={this.path.bind(this, "我的日志")}><span>
                                    <Icon type="edit"/>我的日志</span></Link>
                                </Menu.Item>
                                {this.props.user.roleId === 2 ?
                                    <Menu.Item key="2">
                                        <Link to={'/attention'} onClick={this.path.bind(this, "我的关注")}><span>
                                     <Icon type="team"/> 我的关注</span></Link>
                                    </Menu.Item>
                                    : ""
                                }

                                <Menu.Item key="3">
                                    <Link to={'/excellent-diary'} onClick={this.path.bind(this, "优秀日志")}><span>
                                    <Icon type="like-o"/> 优秀日志</span></Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            {this.props.children}
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

const mapStateToProps = (state) => {
    return {
        user: state.Login.login,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (student) => {
            dispatch(actions.getUser(student))
        },
        getAllUser: () => {
            dispatch(actions.getAllUser())
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
