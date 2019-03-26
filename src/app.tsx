import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { View } from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Modal,
  Stack,
  Lightbox
} from 'react-native-router-flux';

import NavigatorApp from './navigator';

const scenes = Actions.create(
  <Scene key="root">
    <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox" hideNavBar={true}>
        <Stack key="init" back>
          <Scene
            key="main"
            initial
            back={false}
            hideNavBar
            component={NavigatorApp}
          />
        </Stack>
      </Lightbox>
    </Modal>
  </Scene>
);

class App extends React.Component<any, any> {
  public render() {
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
