import React, {  Fragment } from 'react';
import 'antd/dist/antd.css'; 
import './styles.css';
import Icon from '@ant-design/icons';
import { Keyframes, animated } from 'react-spring/renderprops';
import {  Form,  Image } from 'antd';
import delay from 'delay';
import { PandaSvg} from "../CVG"
import {connect} from "react-redux"
import  SideBarItem from "./SideBarItem"
import {fetchProjects,fetchAboutMe , fetchPersonalInfo,fetchWork, fetchEducation,fetchPortfolio} from "../../Redux/ActionCreator";



//-------------------------------------------------//
//----------Redux Fanctionality -------------------//
//-------------------------------------------------//

//---------------------- Mapping Personal Info to Our Props ------------------------//
const mapStatetoProps=(state)=>({
  Personalinfo:state.Personalinfo.PersinalInformation
})

const mapDispatchToProps =(dispatch)=>({
  fetchProjects:()=>dispatch(fetchProjects()),
  fetchPersonalInfo:()=>dispatch(fetchPersonalInfo()),
  fetchWork:()=>dispatch(fetchWork()),
  fetchEducation:()=>dispatch(fetchEducation()),
  fetchPortfolio:()=>dispatch(fetchPortfolio()),
  fetchAboutMe:()=>dispatch(fetchAboutMe())
})
// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { x: 0, from: { x: -100 }, delay: 500 },
    { x: -100, delay: 800 },
  ],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async (call) => {
    await delay(400);
    await call({ delay: 0, x: -100 });
  },
});


//-----------------------------Animation section ------------------------------//
// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: -100, opacity: 0, delay: 0 },
  ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 },
});

// Create Item Info 
const PandaIcon = (props) => <Icon color="#ffffff" component={PandaSvg} {...props} />;
const items = [
  <Image
    width={237}
    src={`https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/11163117_1432808417024085_8962485057343978285_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=JB98t2TOVWYAX-LaexY&_nc_ht=scontent.fjrs4-1.fna&oh=6b5411d7620d5abbbfd2a8b6600bc3b6&oe=5FED1315`}
    placeholder={
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        width={200}
      />
    }
  />,
  <Fragment >

  </Fragment>,
 <SideBarItem/>,
];

class Menu extends React.Component {

 
componentDidMount(){

  this.props.fetchProjects()
  this.props.fetchPersonalInfo()
  this.props.fetchAboutMe()
}

  state = { open: undefined, Projects: null };
  toggle = () => this.setState((state) => ({ open: !state.open }));
  render() {
    const state =
      this.state.open === undefined
        ? 'peek'
        : this.state.open
        ? 'open'
        : 'close';
    const icon = this.state.open ? 'fold' : 'unfold';
     console.log("hooooooooooooo")
    return (
      <>
        <div style={{ zIndex: 100, position: 'absolute'  ,top:"30%"  }}>
          <PandaIcon
            style={{  position:"sticky"  }}
            type={`menu-${icon}`}
            className="sidebar-toggle"
            
            onClick={this.toggle}
          />
          
          <Sidebar native state={state}>
            {({ x }) => (
              <animated.div
                className="sidebar"
                style={{
                  transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
                }}
              >
                <Content
                  native
                  items={items}
                  keys={items.map((_, i) => i)}
                  reverse={!this.state.open}
                  state={state}
                >
                  {(item, i) => ({ x, ...props }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(
                          (x) => `translate3d(${x}%,0,0)`
                        ),
                        ...props,
                      }}
                    >
                      <Form.Item className={i === 0 ? 'middle' : ''}>
                        {item}
                      </Form.Item>
                    </animated.div>
                  )}
                </Content>
              </animated.div>
            )}
          </Sidebar>
        </div>
        <div style={{ background: '#FFF', width: '100%' }}>
          {/* <Projects /> */}
        </div>
      </>
    );
  }
}
export default  connect(mapStatetoProps,mapDispatchToProps)(Menu);
