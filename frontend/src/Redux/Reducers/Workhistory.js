import * as ActionTypes from "../ActionTyprs"

const Whistory = (
  state = { isLoading: true, errMess: null, Whistory: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.WORKHISTORY_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Whistory: action.payload,
      };

    case ActionTypes.WORKHISTORY_LOADING:
      return { ...state, isLoading: true, errMess: null, Whistory: [] };

    case ActionTypes.PERSONALINFO_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default Whistory;