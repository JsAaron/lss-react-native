/**
 * Created by guangqiang on 2017/8/21.
 */
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers';
// import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import customThunk from './middlewares/thunkMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';
import venilogMiddleware from './middlewares/logMiddleware';
import validator from './middlewares/validatorMiddleware';

const middlewares = [
  // validator(),
  // thunk,
  // customThunk(),
  createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] }),
  loggerMiddleware(),
  venilogMiddleware()
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(appReducers);

export default store;
