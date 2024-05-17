import * as value from "./constants";

let initialState = {
  value: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case value.INC:
      return {
        ...state,
        value: state.value + action.value,
      };
    case value.DEC:
      return {
        value: state.value - action.value,
      };
    default:
      return state;
  }
};

export default counterReducer;
