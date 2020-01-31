import React from 'react';
// import { Button, DatePicker, version } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import MainPage from './components/mainPage'
import SomePage from './components/somePage'
const { Header, Sider, Content } = Layout;



class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">LOGO</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>Users List</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="home" />
                <span>About</span>
                <Link to="/tab2" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Route exact path="/" component={MainPage} />
              <Route path="/tab2" component={SomePage} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}


export default App;
