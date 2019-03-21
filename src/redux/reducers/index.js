/**
 * Created by guangqiang on 2017/8/21.
 */
import { combineReducers } from 'redux';
import home from './home';
import movie from './movie';

const rootReducer = combineReducers({
  home,
  movie
});

export default rootReducer;
