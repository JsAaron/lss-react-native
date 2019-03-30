const md5 = require('./md5');
import { PATH } from '../../../config/urls';
import { dateFormat } from '../../lang'

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
export function processData(data: any) {
  data.seq = Date.parse(new Date().toString()) + '';
  data.timesamp = dateFormat('yyyyMMddhhmmss')
  data = objKeySort(data);
  var md5Str = '';
  var d2 = new Array();
  for (var v in data) {
    if (data[v] != null && data[v] != '') {
      md5Str += '&' + v + '=' + data[v];
    }
  }
  var sign = md5.hexMD5(data.seq);
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
  let timeoutBlock = () => { };
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

    var xmlRequest = new XMLHttpRequest();
    xmlRequest.open("POST", params.url || PATH.COMMON, true);
    // xmlRequest.responseType = "blob";//这里是关键，它指明返回的数据的类型是二进制
    xmlRequest.onreadystatechange = function (e) {
      if (xmlRequest.readyState !== 4) {
        return;
      }
      if (xmlRequest.status === 200) {
        console.log('xmlRequest',xmlRequest)
        resolve(xmlRequest.responseText);
      } else {
        console.log('请求失败！')
        reject("请求失败！");
      }
    }
    console.log('ajax_data',ajax_data)
    xmlRequest.send(ajax_data)
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
 * 统一ajax调用
 * 统一返回的判断
 * items.data.retCode === "0000"
 */
function unifyAjax(params) {
  return new Promise((resolve, reject) => {
    ajax(params).then(response => {
      console.log(111111, response)
      // if (response.data.retCode == "0000" ) {
      //   //统一判断成功
      //   resolve(response);
      // } else {
      //   reject(response);
      // }
    }).catch(errResponse => {
      // reject(errResponse);
    });
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
function md5Ajax(params) {
  return new Promise((resolve, reject) => {
    const funcode = params.funcode;

    //加密请求
    serviceMd5(
      Object.assign(params.encrypt, {
        //请求参数,合并funcode
        funcode
      })
    ).then(md5Response => {
      //合并md5Response.data参数
      let ajaxData = {
        data: Object.assign({}, JSON.parse(md5Response), { funcode })
      };

      //混入请求的数据
      if (params.request) {
        //request的参数，可以覆盖md5Response.data数据
        Object.assign(ajaxData.data, params.request);
      }

      //发送正式请求
      unifyAjax(ajaxData).then(response => {
        console.log(111, response)
        //返回对象合集
        if (params.responseType === "[array object]") {
          // resolve([md5Response, response]);
        } else {
          //默认返回请求的
          resolve(response);
        }
      }).catch(reject);

    }).catch(() => { });
  });
};

export { md5Ajax, unifyAjax };
