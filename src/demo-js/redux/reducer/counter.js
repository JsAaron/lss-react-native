import counterType from '../constants/counterType';

const defaultState = 10;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case counterType.INCREASE:
      return state + 1;
    case counterType.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
