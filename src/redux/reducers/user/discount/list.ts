import type from '../../../constants/actionType';
import { handleActions } from 'redux-actions';

const initialState = {
  discountList: []
};

const originalReducers = {};

/**
 * 创建获取列表数据成功
 * MOVIE_SHOWTIME_LIST
 */
originalReducers[type.USER_DISCOUNT_LIST + type.FETCH_SUCCESS_SUFFIX] = (
  state,
  action
) => {
  return {
    ...state,
    showDiscountList: action.payload.ms
  };
};

const reducer = handleActions(originalReducers, initialState);

export default reducer;
