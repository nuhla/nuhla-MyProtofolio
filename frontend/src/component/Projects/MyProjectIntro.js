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
       
              <div >
            <p strong style={{ fontSize: '3.2vh',textAlign: 'left', width: '100%', marginLeft: '5%' }}>
              Front End
            </p>
           </div>
            <Divider orientation="left"></Divider>
           
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/> 
              Languages:TypeScrip, Javascript , ASP.NET
            </p>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                 <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/>
              Technologies: React, Redux, SemanticUI, MaterialUI , Antd, Spring ,Html , css , boostarp
            </p>
         
                      {/* <Button type="primary" shape="round" icon={<SyncOutlined spin  />} size="large"> Click Here To see All List</Button> */}

            
          </div>
   
         
      </>
    )
  }
}

export default ProjectsIntro
