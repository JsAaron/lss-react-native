import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ViewColoredBoxesWithText extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          padding: 10,
        }}
      >
        <View style={{ backgroundColor: 'blue', flex: 1 }} />
        <View style={{ backgroundColor: 'red', flex: 1 }} />
      </View>
    )
  }
}
