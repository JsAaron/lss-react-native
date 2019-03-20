import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { commonStyle, Icon } from '../utils';

// import Movie from './movie/movie';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="首页"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.image} source={require('../assets/tabBar/home.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/tabBar/home-active.png')} />}
            onPress={() => this.setState({ selectedTab: 'Home' })}
          >
            <View style={styles.page1} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'discount'}
            title="优惠券"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.image} source={require('../assets/tabBar/discount.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/tabBar/discount-active.png')} />}
            onPress={() => this.setState({ selectedTab: 'discount' })}
          >
            <View style={styles.page2} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'personal'}
            title="个人中心"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.image} source={require('../assets/tabBar/personal.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('../assets/tabBar/personal-active.png')} />}
            onPress={() => this.setState({ selectedTab: 'personal' })}
          >
            <View style={styles.page1} />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  image:{
    width:20,
    height:20
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  tabText: {
    fontSize: 11,
    color: commonStyle.textGrayColor,
    marginBottom: 5
  },
  selectedTabText: {
    fontSize: 11,
    color: commonStyle.black,
    marginBottom: 5
  }
});
