/**
 * Created by guangqiang on 2017/8/22.
 */
import { bindActionCreators } from 'redux';

import movie from './movie';

const action = {
  movie
};

const dispatch = name => dispatch => {
  //数组，多个
  if (Array.isArray(name)) {
    let tempActionCreators = {};
    for (let i = 0; i < name.length; i++) {
      Object.assign(tempActionCreators, action[name[i]].actionCreators);
    }
    return bindActionCreators(tempActionCreators, dispatch);
  } else {
    return bindActionCreators(action[name].actionCreators, dispatch);
  }
};

export default { dispatch };
