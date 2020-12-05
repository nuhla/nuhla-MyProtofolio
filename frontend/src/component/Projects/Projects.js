import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import ProjectItem from './ProjectItem'
import ProjectsIntro from "./MyProjectIntro"

///---------------------------------------- Redux with Hooks -----------------------------------//
import { useSelector } from 'react-redux'

//----------------------- Our main Function to create Project Page -----------------------------//
function Projects() {
  const Projects = useSelector((state) => state.Projects)
  const [open, set] = useState(false)
  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      size: '50%',
      background: 'rgba(255, 255, 255, 0.0)',
      margin: '50% auto',
      marginTop: '10%',
    },
    to: {
      size: open ? '100%' : '50%',
      background: open
        ? 'rgba(255, 255, 255, 0.0)'
        : 'rgba(255, 255, 255, 0.0)',
      margin: open ? '0 auto' : '20%',
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
    <div id="root" style={{ alignContent: 'center', alignItems: 'center' }}>
      {open ? (
        <>
       
        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            borderStyle: 'none',
          }}
          onClick={() => {
            console.log(open ,"oppppppppppppppen")
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
        </>
      ) : null}
      <Global></Global>
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => set((open) => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <ProjectItem item={item} />
          </Item>
        ))}
        {!open ? (
          <>
         
            <ProjectsIntro/>
            <div></div>
          {/* <div
            className="socialDiv"
            style={{
              width: '100%',
              display: 'flex',
              color: 'white',
              fontSize: '1.8vh',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            <i
              class="fa fa-folder-open fa-lg "
              style={{ fontSize: '22px', color: 'white', margin: '0 0 6 0' }}
            ></i>
            Open
          </div> */}
          </>
        ) : null}
        {/* <button style={{position:"fixed" , top:"20"}} onClick={() => set(open => !open)} > {open?"close":""}</button> */}
      </Container>
    </div>
  )
}

export default Projects
