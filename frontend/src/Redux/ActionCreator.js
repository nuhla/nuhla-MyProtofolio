import * as ActionTypes from './ActionTyprs'
import axios from 'axios'

// console.log(baseUrl, 'baseUrl---------------------------------');

export const fetchPersonalInfo = () => async (dispatch) => {
  dispatch(PersonalOnfoLoading())

  return await axios
    .get('api/personalIfo/')
    .then((PersonalOnfo) => {
      dispatch(addPersonalOnfo(PersonalOnfo.data))
    })
    .catch((error) => dispatch(PersonalOnfoFailed(error.message)))
}

export const PersonalOnfoFailed = (errmess) => ({
  type: ActionTypes.PERSONALINFO_FAILED,
  payload: errmess,
})

export const addPersonalOnfo = (PersonalOnfo) => ({
  type: ActionTypes.PERSONALINFO_ADD,
  payload: PersonalOnfo,
})

export const PersonalOnfoLoading = () => ({
  type: ActionTypes.PERSONALINFO_LOADING,
})

//---------------------------------------------------------------------------------------------------------//
//--------------------------------------Projects Section --------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//

export const fetchProjects = () => async (dispatch) => {
  dispatch(ProjectsLoading())

  return await axios
    .get('api/projects/')
    .then((projects) => dispatch(addProjects(projects.data)))
    .catch((error) => dispatch(ProjectsFailed(error.message)))
}

export const ProjectsFailed = (errmess) => ({
  type: ActionTypes.PROJECTS_FAILED,
  payload: errmess,
})

export const addProjects = (Projects) => ({
  type: ActionTypes.PROJECTS_ADD,
  payload: Projects,
})

export const ProjectsLoading = () => ({
  type: ActionTypes.PROJECTS_LOADING,
})

//---------------------------------------------------------------------------------------------------------//
//--------------------------------------Work History Section --------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//

export const fetchWork = () => async (dispatch) => {
  dispatch(WorkLoading())

  return await axios
    .get('api/jobHistory/')
    .then((Work) => dispatch(addWork(Work.data)))
    .catch((error) => dispatch(WorkFailed(error.message)))
}

export const WorkFailed = (errmess) => ({
  type: ActionTypes.WORKHISTORY_FAILED,
  payload: errmess,
})

export const addWork = (Work) => ({
  type: ActionTypes.PERSONALINFO_ADD,
  payload: Work,
})

export const WorkLoading = () => ({
  type: ActionTypes.WORKHISTORY_LOADING,
})

//---------------------------------------------------------------------------------------------------------//
//--------------------------------------Education Section --------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//

export const fetchEducation = () => async (dispatch) => {
  dispatch(EducationLoading())

  return await axios
    .get('educationAndCirtficate/')
    .then((Education) => dispatch(addEducation(Education.data)))
    .catch((error) => dispatch(EducationFailed(error.message)))
}

export const EducationFailed = (errmess) => ({
  type: ActionTypes.EDUCATION_FAILED,
  payload: errmess,
})

export const addEducation = (Work) => ({
  type: ActionTypes.EDUCATION_ADD,
  payload: Work,
})

export const EducationLoading = () => ({
  type: ActionTypes.EDUCATION_LOADING,
})


//---------------------------------------------------------------------------------------------------------//
//--------------------------------------Portfolio Section --------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//

export const fetchPortfolio = () => async (dispatch) => {
  dispatch(PortfolioLoading())

  return await axios
    .get('api/educationAndCirtficate/')
    .then((Work) => dispatch(addPortfolio(Work.data)))
    .catch((error) => dispatch(PortfolioFailed(error.message)))
}

export const PortfolioFailed = (errmess) => ({
  type: ActionTypes.PORTFOLIO_FAILED,
  payload: errmess,
})

export const addPortfolio = (Work) => ({
  type: ActionTypes.PORTFOLIO_ADD,
  payload: Work,
})

export const PortfolioLoading = () => ({
  type: ActionTypes.PORTFOLIO_LOADING,
})


//---------------------------------------------------------------------------------------------------------//
//--------------------------------------Portfolio Section --------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//

export const fetchAboutMe = () => async (dispatch) => {
  dispatch(AboutMeLoading())

  return await axios
    .get('api/aboutMe/')
    .then((AboutMe) => dispatch(addAboutMe(AboutMe.data)))
    .catch((error) => dispatch(AboutMeFailed(error.message)))
}

export const AboutMeFailed = (errmess) => ({
  type: ActionTypes.ABOUTME_FAILED,
  payload: errmess,
})

export const addAboutMe = (AboutMe) => ({
  type: ActionTypes.ABOUTME_ADD,
  payload: AboutMe,
})

export const AboutMeLoading = () => ({
  type: ActionTypes.ABOUTME_LOADING,
})
