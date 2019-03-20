import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { View, YellowBox } from 'react-native';

import store from './redux';
import homeApp from './page/home';
import counterApp from './page/counter';
import TodoApp from './page/todo';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="learnRedux" title="脸刷刷科技" initial={true} component={homeApp} />
    <Scene key="counterApp" title="计数" component={counterApp} />
    <Scene key="todoApp" title="输入输出1" component={TodoApp} />
  </Scene>
);

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router scenes={scenes} />
      </View>
    );
  }
}
const initApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default initApp;
