import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import ProjectItem from './ProjectItem'
import ProjectsIntro from "./MyProjectIntro"
import { Typography, Divider, Card,Button } from 'antd'
import { SyncOutlined  ,PushpinFilled} from '@ant-design/icons';


import { useSelector } from 'react-redux'

const { Meta } = Card
const { Text } = Typography
///---------------------------------------- Redux with Hooks -----------------------------------//



//----------------------- Our main Function to create Project Page -----------------------------//
function Projects() {
  const Projects = useSelector((state) => state.Projects)
  const [open, set] = useState(true)
  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      size: '100%',
      background: 'rgba(255, 255, 255, 0.0)',
      margin: '10px auto',
      marginTop: '10%',
    },
    to: {
      size: open ? '100%' : '50%',
      background: open
        ? 'rgba(255, 255, 255, 0.0)'
        : 'rgba(255, 255, 255, 0.0)',
      margin: open ? '0 auto' : '10px',
      marginTop: open ? '0' : '10%',
    },
  })

  //------------------ a finction to loop throw all projects array and return transition container --------------//
  const careteDate = () => {
    return Projects?.Projects.map((item) => {
      return {
        name: item.title,
        description: ' #ddd6f3 → #faaca8',
        css:
          'linear-gradient(-20deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.0) 100%, rgba(255, 255, 255, 0.0) 0%)',
        height: 50,
        discription: item.description,
        GitGub: item.GitGub,
        Link: item.Link,
        DateOfProject: item.DateOfProject,
      }
    })
  }

  //------------------- create Date for transition to create atransition for each item in project ------------------//
  var data = Projects ? careteDate() : []
  const transRef = useRef()
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
   
    <div id="root" class="container">
      {open ? (

       
        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            borderStyle: 'none',
          }}
          onClick={() => {
       
            set((open) => false)
          }}
        >
          <a
            href="#"
            style={{color:"white"}}
            class="close"
            onClick={() => {
              set((open) => false)
            }}
          ></a>
        </button>

      ) : null}
      <Global></Global>
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => set((open) => true)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <ProjectItem item={item} />
          </Item>
        ))}
        {!open ? (
 <>
         
            <ProjectsIntro/>
                <div className="card" style={{backgroundImage:"url(https://i.pinimg.com/originals/2f/84/56/2f8456cc5b3d48593c96a82e7a63184f.jpg)" , } }>
       
              <div >
            <p strong style={{ fontSize: '3.2vh',textAlign: 'left', width: '100%', marginLeft: '15px' }}>
              Back End
            </p>
           </div>
            <Divider orientation="left"></Divider>
           
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px"}}/> 
             languages : python , javascript , typescript
            </p>
            <p style={{ textAlign: 'left', width: '100%', marginLeft: '10%' }}>
                 <Button type="primary" shape="circle" icon={<PushpinFilled  />} style={{marginRight:"20px" , justifyContent:"center"}}/>
              Technologies: Nodejs , express , Firebase, GraphQL , Facebook Graphql
              API , django,Aouth2,JWT, Passport , Mysql , Sqlit3, Mongoodb
            </p>
         
                      {/* <Button type="primary" shape="round" icon={<SyncOutlined spin  />} size="large"> Click Here To see All List</Button> */}

            
          </div>
        
     </>
         
        ) : null}
        
      </Container>
    </div>
   
  )
}

export default Projects
