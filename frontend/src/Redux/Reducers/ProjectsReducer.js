import * as ActionTypes from "../ActionTyprs"

const Projects = (
  state = { isLoading: true, errMess: null, Projects: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PROJECTS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Projects: action.payload,
      };

    case ActionTypes.PROJECTS_LOADING:
      return { ...state, isLoading: true, errMess: null, Projects: [] };

    case ActionTypes.PROJECTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default Projects;