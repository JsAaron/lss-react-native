/**
 * Created by guangqiang on 2017/11/21.
 */
import counterType from '../constants/counterType';

const _addItem = (arr, value) => {
  let tempArr = [...arr];
  let obj = {};
  obj.isSelected = false;
  obj.name = value;
  value ? tempArr.push(obj) : null;
  return tempArr;
};

const _deleteItem = (arr, index) => {
  let tempArr = [...arr];
  tempArr.splice(index, 1);
  return tempArr;
};

const _checkItem = (arr, index) => {
  let tempArr = [...arr];
  let tempObj = tempArr[index];
  tempObj.isSelected = !tempObj.isSelected;
  return tempArr;
};

const todo = (state = [], action) => {
  switch (action.type) {
    case counterType.ADDITEM:
      return _addItem(state, action.value);
    case counterType.DELETEITEM:
      return _deleteItem(state, action.index);
    case counterType.CHECKITEM:
      return _checkItem(state, action.index);
    default:
      return state;
  }
};

export default todo;
