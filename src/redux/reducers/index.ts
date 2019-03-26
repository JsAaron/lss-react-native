/**
 * Created by guangqiang on 2017/8/21.
 */
import { combineReducers } from 'redux';
import userDiscount from './user/discount';

const rootReducer = combineReducers({
  userDiscount
});

export default rootReducer;
