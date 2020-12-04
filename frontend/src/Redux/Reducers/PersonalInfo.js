import * as ActionTypes from "../ActionTyprs"

const PersinalInformation = (
  state = { isLoading: true, errMess: null, PersinalInformation: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PERSONALINFO_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        PersinalInformation: action.payload,
      };

    case ActionTypes.PERSONALINFO_LOADING:
      return { ...state, isLoading: true, errMess: null, PersinalInformation: [] };

    case ActionTypes.PERSONALINFO_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default PersinalInformation;