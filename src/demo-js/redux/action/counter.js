import counterType from '../constants/counterType';

const CounterAction = {
  increase() {
    return {
      type: counterType.INCREASE
    };
  },

  decrease() {
    return {
      type: counterType.DECREASE
    };
  }
};

export default CounterAction;
