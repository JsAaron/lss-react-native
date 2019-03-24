import React, { Component } from 'react';
import {
  View,
  FlatList,
  SectionList,
  Image,
  Text,
  StyleSheet
} from 'react-native';
// import {commonStyle} from '../../../utils/commonStyle'
// console.log(1,commonStyle)
import ShowTimeCell from './showTimeCell';

export default class ShowTimeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FlatList
        data={this.props.dataArr}
        renderItem={({ item }) => <ShowTimeCell rowData={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
