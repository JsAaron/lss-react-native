import TYPE from '../constants/todoType';

const TodoAction = {
  addItem(dispatch, value) {
    return dispatch({
      type: TYPE.ADDITEM,
      value
    });
  },

  deleteItem(dispatch, index) {
    return dispatch({
      type: TYPE.DELETEITEM,
      index: index
    });
  },
  checkItem(dispatch, index) {
    return dispatch({
      type: TYPE.CHECKITEM,
      index: index
    });
  }
};

export default TodoAction;
