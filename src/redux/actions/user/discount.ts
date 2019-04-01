import { createAction } from 'redux-actions';
import type from '../../constants/actionType';
import { md5Ajax } from '../../../utils/network/request';

const getList = params => {
  let data = {
    agentid: '708000719740',
    latitude: '28.22778',
    longitude: '112.93886'
  };
  let request = {
    businessid: '',
    sales_volume: '',
    nearest_distance: '',
    agentname: '',
    pageno: '1',
    pagesize: '30'
  };
  return md5Ajax({
    funcode: '0072',
    encrypt: { data },
    request
  });
};

/**
 * 获取优惠券首页数据
 */
const getDiscountShowList = createAction(type.USER_DISCOUNT_LIST, getList);

const actionCreators = {
  getDiscountShowList
};

export default { actionCreators };
