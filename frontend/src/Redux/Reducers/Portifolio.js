import * as ActionTypes from "../ActionTyprs"

const Portfolio = (
  state = { isLoading: true, errMess: null, Portfolio: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PORTFOLIO_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Portfolio: action.payload,
      };

    case ActionTypes.PORTFOLIO_LOADING:
      return { ...state, isLoading: true, errMess: null, Portfolio: [] };

    case ActionTypes.PORTFOLIO_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default Portfolio;