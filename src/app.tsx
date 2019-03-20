import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native';

import store from './redux';
import homePage from './page/home';
import CounterPage from './page/counter';

interface Props {}
interface State {}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="learnRedux" title="脸刷刷科技" initial={true} component={homePage} />
    <Scene key="counterApp" title="计数" component={CounterPage} />
  </Scene>
);

class App extends Component<Props, State> {
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
