import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import { Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox } from 'react-native-router-flux';
import { View } from 'react-native';

import TabBar from './page/tabBar';

const scenes = Actions.create(
  <Scene key="root">
    <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox" hideNavBar={true}>
        <Stack key="init" back>
          <Scene key="main" initial back={false} hideNavBar component={TabBar} />
        </Stack>
      </Lightbox>
    </Modal>
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
      <App/>
    </Provider>
  )
}

export default initApp;