import React from 'react'
import Menu from './component/MenuItems.js/Menu'
import MyProfile from './component/MyProfile'
import Projects from './component/Projects/Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Eduecation from './component/Education/MainEduPage'
import { connect } from 'react-redux'
import {
  fetchProjects,
  fetchAboutMe,
  fetchPersonalInfo,
  fetchWork,
  fetchEducation,
  fetchPortfolio,
} from './Redux/ActionCreator'

import Work from './component/WorkExperince/WorkExper'
import { Drawer, Layout, Row, Col, Typography, Image, Divider } from 'antd'
import {
  CheckCircleTwoTone,
  MehTwoTone,
  PhoneTwoTone,
  MailTwoTone,
} from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'
const { Content } = Layout

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPersonalInfo: () => dispatch(fetchPersonalInfo()),
  fetchWork: () => dispatch(fetchWork()),
  fetchEducation: () => dispatch(fetchEducation()),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  fetchAboutMe: () => dispatch(fetchAboutMe()),
})

//---------------------- Mapping Personal Info to Our Props ------------------------//
const mapStatetoProps = (state) => ({
  Personalinfo: state.Personalinfo.PersinalInformation,
})
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      placement: 'left',
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.props.fetchAboutMe()
    this.props.fetchPortfolio()
    this.props.fetchEducation()
    this.props.fetchWork()
    this.props.fetchPersonalInfo()
    this.props.fetchProjects()
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    })
  }
  render() {
    console.log(this.props.Personalinfo, '5555555555555555555555555')
    return (
      <Router>
        <Drawer
          drawerStyle={{ backgroundColor: 'black' }}
          closable={true}
          style={{ zIndex: 2000 }}
          placement={'left'}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          key={'left'}
        >
          <Row>
            <Col>
              <Image
                src="https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/11163117_1432808417024085_8962485057343978285_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=JB98t2TOVWYAX-LaexY&_nc_ht=scontent.fjrs4-1.fna&oh=6b5411d7620d5abbbfd2a8b6600bc3b6&oe=5FED1315"
                width={200}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={19} push={6}>
              <span
                style={{ marginTop: 10, color: '#ffff', fontSize: '1.5vh' }}
              >
                {this.props?.Personalinfo[0]?.fullname}
              </span>
            </Col>
            <Col span={5} pull={18}>
              <span
                class="glyphicon glyphicon-user"
                style={{ color: '#5B94BA' }}
              ></span>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={19} push={6}>
              <span
                style={{ marginTop: 10, color: '#ffff', fontSize: '1.5vh' }}
              >
                {this.props?.Personalinfo[0]?.jobtitle}
              </span>
            </Col>

            <Col span={5} pull={18}>
              <span
                class="glyphicon glyphicon-tag"
                style={{ color: '#5B94BA' }}
              ></span>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={19} push={6}>
              <span
                style={{ marginTop: 10, color: '#ffff', fontSize: '1.5vh' }}
              >
                {this.props?.Personalinfo[0]?.email}
              </span>
            </Col>

            <Col span={5} pull={18}>
              {/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}
              {/* <MailTwoTone twoToneColor="#ffff" style={{fontSize:"24px"}} /> */}

              <span
                class="glyphicon glyphicon-envelope"
                style={{ color: '#5B94BA' }}
              ></span>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={19} push={6}>
              <span
                style={{ marginTop: 10, color: '#ffff', fontSize: '1.5vh' }}
              >
                {this.props?.Personalinfo[0]?.phone}
              </span>
            </Col>

            <Col span={5} pull={18}>
              <span
                class="glyphicon glyphicon-phone-alt"
                style={{ color: '#5B94BA' }}
              ></span>
            </Col>
          </Row>
          {/* <Menu /> */}
        </Drawer>
        <Content>
          <NavBar Open={this.showDrawer.bind(this)} />
          <Switch>
            <Route exact path="/">
              <MyProfile />
            </Route>
            <Route exact path="/projects">
              <Projects />
              <div
                style={{
                  height: '3vh',
                  bottom: 0,
                  position: 'sticky',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    margin: '0 auto',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                >
                  {' '}
                  Made with ❤ by Nuhla Almasri © 2020
                </div>{' '}
              </div>
            </Route>
            <Route exact path="/education">
              <Eduecation />
              <div
                style={{
                  height: '3vh',
                  bottom: 0,
                  position: 'sticky',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    margin: '0 auto',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                >
                  {' '}
                  Made with ❤ by Nuhla Almasri © 2020
                </div>{' '}
              </div>
            </Route>
            <Route>
              <Work />
              <div
                style={{
                  height: '3vh',
                  bottom: 0,
                  position: 'sticky',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    margin: '0 auto',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                  }}
                >
                  {' '}
                  Made with ❤ by Nuhla Almasri © 2020
                </div>{' '}
              </div>
            </Route>
          </Switch>
        </Content>
      </Router>
    )
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)
