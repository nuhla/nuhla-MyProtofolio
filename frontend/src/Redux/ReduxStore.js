import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Personalinfo from './Reducers/PersonalInfo'
import Projects from './Reducers/ProjectsReducer'
import History from './Reducers/Workhistory'
import Education from './Reducers/EduReducer'
import Portfolio from './Reducers/Portifolio';
import AboutMe from "./Reducers/AboutMe"

// const config = {
//   key: 'root',
//   debug: true,
// }

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Personalinfo,
      Projects,
      History,
      Education,
      Portfolio,
      AboutMe
    }),
    applyMiddleware(thunk, logger),
  )

  console.log(store.getState())
  return store
}

export default ConfigureStore
