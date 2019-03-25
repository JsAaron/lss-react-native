import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../../utils/commonStyle';
import { Icon } from '../../../utils/icon';

export default class ShowTimeCell extends Component {
  render() {
    const data = this.props.rowData;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Actions.movieDetail({ id: data.id })}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: commonStyle.clear
          }}
        >
          <Image style={styles.img} source={{ uri: data.img }} />
          <View style={{ position: commonStyle.absolute }}>
            <Icon
              name={'oneIcon|play_cycle_o'}
              size={25}
              color={commonStyle.white}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: commonStyle.lineColor,
    marginLeft: 10,
    paddingBottom: 10,
    marginTop: 10
  },
  img: {
    width: 50,
    height: 80
  },
  rightContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceInfo.deviceWidth - 70 - 50,
    flex: 1
  }
});
