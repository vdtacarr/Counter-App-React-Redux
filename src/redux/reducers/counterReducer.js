import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 10, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      (newState = state + 1)
      return newState;
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - 1);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + 2);
    default:
      return state;
  }
};

export default counterReducer;