import React from 'react'
import Menu from './component/MenuItems.js/Menu'
import MyProfile from './component/MyProfile'
import Projects from "./component/Projects/Projects"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './component/NavBar'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Menu />
          <Switch>
            <Route exact path="/">
              <MyProfile />
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
