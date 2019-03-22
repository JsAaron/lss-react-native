import React, {Component} from 'react'
import {View, ListView, Image, Text, StyleSheet} from 'react-native'
// import {commonStyle} from '../../../utils/commonStyle'
// console.log(1,commonStyle)

export default class ShowTimeList extends Component {

  constructor(props) {
    super(props)
    console.log(123,this.props)
    // this.renderRow = this.renderRow.bind(this)
    // this.state = {
    //   dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    // }
  }

  // renderRow(rowData, sectionId, rowId) {
  //   return (
  //     <ShowTimeCell key={rowId} rowData={rowData}/>
  //   )
  // }

  render() {
    // let dataSource = this.state.dataSource.cloneWithRows(this.props.dataArr)
    return (
      <Text>123</Text>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
    // backgroundColor: commonStyle.white
  }
})