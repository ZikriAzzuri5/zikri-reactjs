import * as count from "./constants";

export const increment = (value) => {
  return {
    type: count.INC,
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: count.DEC,
    value: value,
  };
};

export const decrementWithCheckingAction = (value) => {
  return (dispatch, getState) => {
    if (getState().value.value > 0) {
      dispatch(decrement(value));
    }
  };
};
