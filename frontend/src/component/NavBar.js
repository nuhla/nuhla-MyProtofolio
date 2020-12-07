import React from 'react'
import { Link } from 'react-router-dom'
import {

  SettingFilled,
 
} from '@ant-design/icons';
class NavPar extends React.Component {
  render() {
    return (
      
      <div className="nav justify-content-center sticky-top navbar-dark bg-dark navBar" >
       
       <div style={{color:"#5B94BA", maxWidth:"20px"}}><SettingFilled spin  style={{fontSize:"32px"}} onClick={()=>this.props.Open()}></SettingFilled></div>
    
        <div style={{minWidth:"60%" ,display:"flex"}}>
          <div style={{width:"50%" , display:"flex"}}>
                <Link
          to={{
            pathname: `/`,
          }}
        >
          <li className="nav-item navBarItem">Home</li>
        </Link>
        <Link to={{ pathname: '/projects' }}>
          <li className="nav-item navBarItem">Projects</li>
        </Link>
        <Link to={{ pathname: 'education' }}>
         
          <li className="nav-item navBarItem">Education</li>
        </Link>
        <Link to={{ pathname: 'work' }}>
          <li className="nav-item navBarItem">Work History</li>
        </Link>
        </div>
        </div>
        <div style={{color:"white", maxWidth:"20px"}}></div>
      </div>
    )
  }
}

export default NavPar
