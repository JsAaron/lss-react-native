import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Button } from 'react-native';

console.log('...Platform', Platform.Version);

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{this.state.bodyText}</Text>
          <Text
            style={{
              fontWeight: 'bold'
            }}
          >
            I am bold
            <Text
              style={{
                color: 'red'
              }}
            >
              and red
            </Text>
          </Text>
        </Text>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{this.state.bodyText}</Text>
          <Text
            style={{
              fontWeight: 'bold'
            }}
          >
            I am bold
            <Text
              style={{
                color: 'red'
              }}
            >
              and red
            </Text>
          </Text>
        </Text>
        <Button title="提交" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
