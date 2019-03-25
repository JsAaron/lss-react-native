const md5 = require('./md5');
import { PATH } from '../../../redux/constants/urls';

/**
 * 字段排序
 */
const objKeySort = arys => {
  var newkey = Object.keys(arys).sort();
  var newObj = {};
  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = arys[newkey[i]];
  }
  return newObj;
};

/**
 * 返回通用校验字段
 */
export function processData(data) {
  data.seq = Date.parse(new Date()) + '';
  data.timesamp = new Date().Format('yyyyMMddhhmmss');
  data = objKeySort(data);
  var md5Str = '';
  var d2 = new Array();
  for (var v in data) {
    if (data[v] != null && data[v] != '') {
      md5Str += '&' + v + '=' + data[v];
    }
  }
  var sign = md5.hexMD5(data.seq + data.timesamp);
  data.sign = sign;
  return data;
}

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
  let timeoutBlock = () => {};
  let timeout_promise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      // 请求超时处理
      reject('timeout promise');
    };
  });

  // Promise.race(iterable)方法返回一个promise
  // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
  let abortable_promise = Promise.race([original_fetch, timeout_promise]);

  setTimeout(() => {
    timeoutBlock();
  }, timeout);

  return abortable_promise;
};

/**
 * 发送ajax请求
 *
 * @export
 * @param {*} params
 * @returns
 */
export function ajax(params) {
  return new Promise((resolve, reject) => {
    let ajax_data;
    //加密请求
    if (params.md5Request) {
      ajax_data = params.data;
    } else {
      //普通请求
      ajax_data = {
        reqJson: JSON.stringify(processData(params.data)),
        api: PATH.API
      };
    }

    var formData = new FormData();
    formData.append('username', 'Groucho');
    formData.append('accountnum', 123456); //数字123456会被立即转换成字符串 "123456"

    const send = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(ajax_data)
    };

    console.log(22, params.url);

    fetch(params.url || PATH.COMMON, send)
      .then(response => {
        console.log('response', response);
      })
      .catch(err => {
        console.log('error', err);
      });
  });
}

/**
 * 服务器非对称加密
 */
function serviceMd5(params) {
  return new Promise((resolve, reject) => {
    params.url = PATH.MD5COMMON;
    params.md5Request = true;
    ajax(params)
      .then(resolve)
      .catch(reject);
  });
}

/**
 * 带md5的统一请求处理
 * md5Config= ajaxConfig = {
 *  encrypt :{}加密数据
 *  request :{}请求的数据,正式发送，可以覆盖encrypt
 *  funcode 识别码都需要发送
 *  responseType  返回数据类型 "[array object]" 数组对象
 * }
 * return
 *  resolve reject
 */
const ajaxFetch = params => {
  return new Promise((resolve, reject) => {
    const funcode = params.funcode;

    //加密请求
    serviceMd5(
      Object.assign(params.encrypt, {
        //请求参数,合并funcode
        funcode
      })
    )
      .then(md5Response => {
        console.log(123, md5Response);
      })
      .catch(() => {});
  });
};

export { ajaxFetch };
