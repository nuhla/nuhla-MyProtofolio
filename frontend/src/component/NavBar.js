import React from 'react'
import { Link } from 'react-router-dom'

class NavPar extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-center navbar-dark bg-dark navBar">
        
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <li className="nav-item navBarItem">Home</li>
        </Link>
        <Link to={{pathname:"/projects"}}>
          <li className="nav-item navBarItem">Projects</li>
        </Link>
        <li className="nav-item navBarItem">
        
            Education
          
        </li>
      
      </ul>
    )
  }
}

export default NavPar
