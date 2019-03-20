import TYPE from '../constants/counterType';

const CounterAction = {
  increase() {
    return {
      type: TYPE.INCREASE
    };
  },

  decrease() {
    return {
      type: TYPE.DECREASE
    };
  }
};

export default CounterAction;
