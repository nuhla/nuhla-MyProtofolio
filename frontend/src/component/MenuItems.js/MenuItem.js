
import { Typography } from 'antd'
import React from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Row, Col } from 'antd'


// const BoxIcon = (props) => <Icon component={BoxSvg} {...props} />;
// const MyMenu = [
// { Title: 'About Me', Icons: BoxSvg },
//   { Title: 'Skils', Icons: BoxIcon },
//   { Title: 'Experince', Icons: BoxIcon },
//   { Title: 'My Projects', Icons: BoxIcon },

// ]

class MenuItem extends React.Component {


  render() {
    return (
      <div >
          
        <Row>
     
          <Col span={18} push={6}>
            <Typography  style={{marginTop:10,color:"#fffff", fontSize:"1.8vh"}}>{this.props.title}</Typography>
          </Col>
          <Col span={6} pull={18}>
             <CheckCircleTwoTone twoToneColor="#52c41a" />
           
          </Col>
        </Row>
      </div>
    )
  }
}

export default MenuItem
