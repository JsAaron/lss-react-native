import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, ViewStyle, StatusBar } from 'react-native';

import RootNavigator from './navigator';

interface Props {}

interface State {}

export default class Navigation extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0398ff" barStyle="light-content" />
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  } as ViewStyle
});
