import React from 'react';
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Action from '../../../redux/actions';
import { deviceInfo } from '../../../utils';
import { commonStyle } from '../../../config/commonStyle';
import { connect } from 'react-redux';

const Circle = (props: any) => {
  const size = props.size || 20;
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1
  };
  return <View style={style} />;
};

/**
 * 用户登录页面
 *
 * @export
 * @class DiscountApp
 * @extends {Component}
 */
class LoginApp extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop);
    console.log('props', this.props);
    this.state = {
      searchValue: ''
    };
  }

  componentDidMount() {
    Promise.all([this.props.getDiscountShowList()]).then(response => {
      console.log('response', response);
    });
  }

  onSearchSubmit(e) {}

  onSearchBar(value) {
    console.log(value);
  }

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
  },
  loginBtn: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 12,
    width: deviceInfo.deviceWidth - 40,
    backgroundColor: '#0D70C5',
    borderRadius: 25
  }
});

const _LoginApp = connect(
  state => state.userDiscount.list,
  Action.dispatch('userDiscount')
)(LoginApp);

export default _LoginApp;
