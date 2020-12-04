import * as ActionTypes from "../ActionTyprs"

const About = (
  state = { isLoading: true, errMess: null, About: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ABOUTME_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        About: action.payload,
      };

    case ActionTypes.ABOUTME_LOADING:
      return { ...state, isLoading: true, errMess: null, About: [] };

    case ActionTypes.ABOUTME_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default About;