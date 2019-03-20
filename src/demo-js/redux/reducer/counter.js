import TYPE from '../constants/counterType';

const defaultState = 10;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.INCREASE:
      return state + 1;
    case TYPE.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
