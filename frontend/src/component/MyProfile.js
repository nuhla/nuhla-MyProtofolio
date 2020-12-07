import React from 'react'
import PrefDiscription from './ProfileContent/PrefDiscription'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import {connect } from "react-redux"
import Skills from "./ProfileContent/IntrestAndSkills"

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`




//-------------------------------- Map StateTo Props ----------------------------//

const mapStateToProps =(state)=>({
  AboutMe :state.AboutMe.About
})

class Profile extends React.Component {

  render() {

    return (
 
      <Parallax ref={(ref) => (this.parallax = ref)} pages={2}  >
          
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: '#35528C' }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#282C34' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#101010' }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />
         <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
{/*  
        <ParallaxLayer
          offset={2}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img
           alt=""
            src={
              'https://webstockreview.net/images/clipart-happy-business-person-6.png'
            }
            style={{ marginTop: 100, width: '40%' }}
          />
        </ParallaxLayer> */}



        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
           display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin :"0 auto"
          }}
        >
          <div style={{width:"50%"}} >
            <div style={{alignContent:"center" ,display:"flex",flexDirection:"row" }}>
              
              <PrefDiscription AbouMe={this.props.AboutMe[0]}></PrefDiscription>
               {/* <img src={"https://pngimg.com/uploads/question_mark/question_mark_PNG129.png"}   alt="" style={{width:"30%", height:"25%"}} /> */}
            </div>

           
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin :"0 auto"
          }}
        >
           <div style={{ display:"flex",flexDirection:"row"  , maxWidth:"700px" , margin :"0 auto"}}>
         <Skills data={this.props.AboutMe[1]}></Skills>
     
          </div>
              
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
            <img
           alt=""
            src={
              'https://webstockreview.net/images/clipart-happy-business-person-6.png'
            }
            style={{ marginTop: 100, width: '50%' }}
          />
        </ParallaxLayer> */}
{/* 
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <img src={url('bash')}   alt="" style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
  
    )
  }
}

export default connect(mapStateToProps)( Profile)
