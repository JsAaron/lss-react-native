import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { deviceInfo } from '../../../utils';
import commonStyle from '../../../config/commonStyle';

/**
 * 用户注册页面
 *
 * @export
 * @class LoginApp
 * @extends {Component}
 */
class LoginApp extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop);

    console.log('props', this.props);
  }

  componentDidMount() {}

  renderLoginPanel() {
    return (
      <Image
        style={{
          width: deviceInfo.deviceWidth,
          height: 300
        }}
        source={require('../../../assets/images/user/login-bg.jpg')}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderLoginPanel()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.bgColor
  }
});

export default LoginApp;
