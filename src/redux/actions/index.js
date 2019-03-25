import { bindActionCreators } from 'redux';

import userDiscount from './user/discount';

const action = {
  userDiscount
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
