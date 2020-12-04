import { Card, Avatar } from 'antd'
import React from 'react'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Meta } = Card

//-------------------------------- Map StateTo Props ----------------------------//

class ProjectsCard extends React.Component {
  render() {
    console.log(this.props.item)
    return (
      <>
        <Card
          style={{
            width: '100%',

            backgroundColor: '!important #ACACAC',
          }}
          actions={[
            <a href={this.props.item.GitGub} >
              <i
                class="fa fa-github fa-lg fa-lg "
                style={{
                  fontSize: '22px',
                  color: '#ACACAC',
                  margin: '0 0 6 0',
                }}
              ></i>
            </a>,
            <a href={this.props.item.Link} >
              <i
                class="fa fa-link fa-lg "
                style={{
                  fontSize: '22px',
                  color: '#ACACAC',
                  margin: '0 0 6 0',
                }}
              ></i>
            </a>,
            // <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://lh3.googleusercontent.com/proxy/JOu0Wta7gvh1iQdliECCskHUr4-1b7nNrkHR3ZQ0AgpmewOhNlgmzmwa_ldxOwYf9rjwAs13dF-QERN_qoBDJeRBqqDOdMEqC6RLLs7UzPvsfL1B65NH89NB-fdnvSFlQJzbCRk" />
            }
            title={<span style={{fontSize:"2vh"}}>{this.props.item.name}</span>}
            description= {<span style={{fontSize:"2vh"}}>{this.props.item.discription}</span>}
          />
        
        </Card>
       
      </>
    )
  }
}

export default ProjectsCard
