import React from 'react'

import './styles.css'

import MenuItem from './MenuItem'

import { connect } from 'react-redux'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
//---------------------- Mapping Personal Info to Our Props ------------------------//
const mapStatetoProps = (state) => ({
  Personalinfo: state.Personalinfo.PersinalInformation,
})

class SidBarItems extends React.Component {
  render() {
    console.log(
      this.props.Personalinfo,
      'this.props.Personalinfothis.props.Personalinfothis.props.Personalinfothis.props.Personalinfothis.props.Personalinfo',
    )
    if (this.props.Personalinfo.length === 1) {
      return (
        <div>
          <Row>
            <Col span={18} push={6}>
              <Typography
                style={{ marginTop: 10, color: '#fffff', fontSize: '1.8vh' }}
              >
                {this.props.Personalinfo[0].fullname}
              </Typography>
            </Col>
            <Col span={6} pull={18}>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Col>

            <Col span={18} push={6}>
              <Typography
                style={{ marginTop: 10, color: '#fffff', fontSize: '1.8vh' }}
              >
                {this.props.Personalinfo[0].jobtitle}
              </Typography>
            </Col>

            <Col span={6} pull={18}>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Col>
            <Col span={18} push={6}>
              <Typography
                style={{ marginTop: 10, color: '#fffff', fontSize: '1.8vh' }}
              >
                {this.props.Personalinfo[0].email}
              </Typography>
            </Col>

            <Col span={6} pull={18}>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Col>
            <Col span={18} push={6}>
              <Typography
                style={{ marginTop: 10, color: '#fffff', fontSize: '1.8vh' }}
              >
                {this.props.Personalinfo[0].phone}
              </Typography>
            </Col>

            <Col span={6} pull={18}>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Col>
          </Row>
        </div>
      )
    } else return <></>
  }
}

export default connect(mapStatetoProps)(SidBarItems)
