const TodoAction = {
  addItem(dispatch, value) {
    return dispatch({
      type: Constants.ADDITEM,
      value
    });
  },

  deleteItem(dispatch, index) {
    return dispatch({
      type: Constants.DELETEITEM,
      index: index
    });
  },
  checkItem(dispatch, index) {
    return dispatch({
      type: Constants.CHECKITEM,
      index: index
    });
  }
};

export default TodoAction;
