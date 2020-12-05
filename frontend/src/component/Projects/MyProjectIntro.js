import React from 'react'
import { Typography, Divider, Card,Button } from 'antd'
import { SyncOutlined  ,PushpinFilled} from '@ant-design/icons';
const { Text } = Typography

const { Meta } = Card

//-------------------------------- Map StateTo Props ----------------------------//

class ProjectsIntro extends React.Component {
  render() {
    console.log(this.props.item)
    return (
      <>
        <div className="card" style={{backgroundImage:"url(https://i.pinimg.com/originals/2f/84/56/2f8456cc5b3d48593c96a82e7a63184f.jpg)" , } }>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop:"5%"
            //   alignContent: 'center',
            //   alignItems: 'center',
            }}
          >
              <div >
            <Text strong style={{ fontSize: '3.2vh',textAlign: 'left', width: '100%', marginLeft: '5%' }}>
              Recent Works
            </Text>
           </div>
            <Divider orientation="left">Before you Head to My Projects here is  More :</Divider>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '5%' }}>
                  
              Alot of Job here is Don using the following Tech :
            </p>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/> 
              Frontend: React , Spring , MaterialUI , SemanticUI, antd,Redux,
              and Redux Presist
            </p>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                 <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/>
              Backend: Nodejs , express , Firebase, GraphQL , Facebook Graphql
              API , Python, django
            </p>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                 <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/>
              Database:Mysql , Mongoodb , Postgress, Firebase Store , Sqlit3
            </p>
                      <Button type="primary" shape="round" icon={<SyncOutlined spin  />} size="large"> Click Here To see All List</Button>

            
          </div>
        </div>
      </>
    )
  }
}

export default ProjectsIntro
