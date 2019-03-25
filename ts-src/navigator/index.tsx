import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { commonStyle } from '../utils';
import DiscountApp from '../page/user/discount';

export default class NavigatorApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'discount'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/home.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/home-active.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'Home' })}
          >
            <DiscountApp />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'discount'}
            title="优惠券"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/discount.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/discount-active.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'discount' })}
          >
            <DiscountApp />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'personal'}
            title="个人中心"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/personal.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.image}
                source={require('../assets/tabBar/personal-active.png')}
              />
            )}
            onPress={() => this.setState({ selectedTab: 'personal' })}
          >
            <DiscountApp />
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
  image: {
    width: 20,
    height: 20
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
