import * as ActionTypes from "../ActionTyprs"

const Education = (
  state = { isLoading: true, errMess: null, Education: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.EDUCATION_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Education: action.payload,
      };

    case ActionTypes.EDUCATION_LOADING:
      return { ...state, isLoading: true, errMess: null, Education: [] };

    case ActionTypes.EDUCATION_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default Education;