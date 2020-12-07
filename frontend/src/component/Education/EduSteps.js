import React from 'react'
import './steps.css'
import { Steps } from 'antd'
import { Space, Button } from 'antd'

const { Step } = Steps

class EduSteps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Item: {},
    }
  }

  render() {
    return (
      <Step
      style={{width:"30%"}}
        title="Finished"
        description={
          <Space align="center">
            center
            <Button type="ghost">Primary</Button>
            <span className="mock-block">Block</span>
          </Space>
        }
      />
    )
  }
}

export default EduSteps
