/**
 * Created by guangqiang on 2017/11/19.
 */
import * as React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

interface Props {}
interface State {}

export default class LearningRedux extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => Actions.counterApp()}>
          <Text>计数器</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Actions.todoApp()}>
          <Text>TodoApp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    alignItems: 'center',
    width: 100,
    height: 100,
    marginVertical: 50,
    backgroundColor: 'red',
    justifyContent: 'center'
  }
});
