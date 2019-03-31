/**
 * 小程序配置文件
 * http://yuewangt.yuqianshu.com/lcc/lcc 等同于 http://118.31.6.114:8080/lssSys
 * http://yuewangt.yuqianshu.com/lcc/pay 等同于 http://118.31.6.114:8990/pay
 *
 */

const lcc = 'https://lccpay.joylifepay.com/lssSys';
const pay = 'https://lcc.joylifepay.com/pay';
const serverImageUrl = 'https://lccpay.joylifepay.com/lssSys/xcx/';

let PATH = {
  API: 'appaccount/appbase',
  /**
   * 获取openid请求
   * openIdUrl
   */
  OPENID: `${lcc}/loginAction!weixingcode2session.ilf`,
  /**
   * 二维码请求地址
   * 分享
   * shareQrCodeUrl
   */
  SHAREQRCODE: `${lcc}/loginAction!weixingcodeImage.ilf`,
  /**
   * 二维码请求地址
   * 支付
   * payQrCodeUrl
   */
  PAYQRCODE: `${lcc}/loginAction!weixingSolidImage.ilf`,
  /**
   * 人脸识别设备请求
   * deviceUrl
   */
  DEVICE: `${pay}/smallProgram`,
  /**
   * 上传文件
   * uploadFile
   */
  UPLOADFILE: `${lcc}/loginAction!uploadFile.ilf`,
  /**
   * 普通请求
   * requestUrl
   * common
   */
  COMMON: `${lcc}/loginAction!currencyapp.ilf`,
  /**
   * 加密请求
   */
  MD5COMMON: `${lcc}/lssSys/loginAction!desapp.ilf`,
  /**
   * 服务器图片
   * serverImageUrl
   */
  SERVERIMAGE: serverImageUrl,
  /**
   * 基础地址
   * baseUrl
   */
  BASE: lcc
};

export { PATH };
