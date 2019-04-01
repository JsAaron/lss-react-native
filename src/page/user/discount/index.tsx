import React from 'react';
import { View } from 'react-native';
import { SearchBar } from '@ant-design/react-native';
import Action from '../../../redux/actions';
import { connect } from 'react-redux';


/**
 * 优惠券页面
 *
 * @export
 * @class DiscountApp
 * @extends {Component}
 */
class DiscountApp extends React.Component<any, any> {
  constructor(prop: any) {
    super(prop);
    // console.log('props', this.props);
    this.state = {
      searchValue: ''
    };
  }

  componentDidMount() {
    this.props.getDiscountShowList().then((res:any)=>{
      console.log(res.value)
    })
  }

  onSearchSubmit(e) {}

  onSearchBar(value) {
    console.log(value);
  }

  render() {
    return (
      <View style={{ marginTop: 0 }}>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={this.onSearchSubmit}
          showCancelButton
        />
      </View>
    );
  }
}

const _DiscountApp = connect(
  state => state.userDiscount.list,
  Action.dispatch('userDiscount')
)(DiscountApp);

export default _DiscountApp;
