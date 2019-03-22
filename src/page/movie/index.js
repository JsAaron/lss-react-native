import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SegmentedControl } from 'antd-mobile';
import { commonStyle } from '../../utils';
import Action from '../../redux/actions';

class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      refreshing: false,
      hasMore: true,
      showTimeList: [],
      comeingNewList: [],
      attentionList: [],
      selectedTab: '正在热映'
    };
  }

  componentDidMount() {
    Promise.all([this.props.getMovieShowTimeList(), this.props.getMovieComeingNewList()]).then(response => {
      this.setState({
        showTimeList: response[0].value.ms,
        comeingNewList: response[1].value.moviecomings,
        attentionList: response[1].value.attention
      });
    });
  }

  onValueChange = value => {
    this.setState({ selectedTab: value });
  };

  render() {
    console.log(555);
    return (
      <View style={styles.containerStyle}>
        <Text>3333333</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: commonStyle.white
  },
  navBarStyle: {
    height: commonStyle.navHeight,
    backgroundColor: '#151C28'
  },
  segContainer: {
    marginTop: commonStyle.navStatusBarHeight,
    height: commonStyle.navContentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabStyle: {
    width: 180
  }
});

const _MovieList = connect(
  state => state.movie.movieList,
  Action.dispatch('movie')
)(MovieList);

export default _MovieList;
