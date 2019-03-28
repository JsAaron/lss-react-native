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

//底部导航
import NavigatorApp from './navigator';

//==========================
//        user端
//==========================
import UserLoginApp from './page/user/register/login';

const scenes = Actions.create(
  <Scene key="root">
    <Modal key="modal" hideNavBar>
      {/* 用户注册 */}
      <Stack key="userRgister" titleStyle={{ alignSelf: 'center' }}>
        <Scene component={UserLoginApp} title="用户注册" />
      </Stack>

      {/* 内容 */}
      <Lightbox key="lightbox" hideNavBar={true}>
        <Stack key="init" back>
          <Scene key="main" hideNavBar component={NavigatorApp} />
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
