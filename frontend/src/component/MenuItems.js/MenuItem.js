
import { Typography } from 'antd'
import React from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = { left: '70%', duration: 2000 };
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    };
  }

    onRestart = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }
  componentDidMount(){
      this.onRestart()
  }
  render() {
    return (
 <div>
        <TweenOne
          animation={this.animation}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          className="code-box-shape"
          style={{ margin: '40px 20px' }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            width: 300, 
            left: '50%', 
            marginLeft: -150, 
            bottom: 25,
            backgroundColor:"#00000" 
        
          }}
        >
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      </div>
      </div>
    )
  }
}

export default MenuItem
