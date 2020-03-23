/* eslint-disable */
import dayjs from 'dayjs';
import cookie from './Cookie';
import config from '@/config';

const formateDate = date => (date ? dayjs(date) : dayjs()).format('YYYY-MM-DD: HH:mm:ss');

/**
 * 获取url参数
 * @param url{String} 目标url
 * @param n{String} 目标参数名称;
*/
function getQueryName(n, url = window.location.href) {
  if (!n || !url) {
    throw new Error('n or url is undefined');
    return;
  }
  const query = url.match(/[^?]+/g)[1];
  if (!query) return null;
  const reg = new RegExp(`(${n}=)([^&]*)`, 'g');
  const queryArr = query.match(reg);
  let result = null;
  const resultArr = [];
  if (queryArr && Array.isArray(queryArr)) {
    queryArr.map((ele) => {
      // const key = ele.split('=')[0];
      const value = ele.split('=')[1];
      if (value !== undefined && value !== '') {
        resultArr.push(decodeURIComponent(value));
      }
    });
  }
  if (Array.isArray(resultArr)) {
    result = resultArr.length > 1 ? resultArr : resultArr.length === 1 ? resultArr[0] : null;
  }
  return result;
}
/**
 * 输出设备信息
 * @return [Boolean]
 */
const device = ((function () {
  const ua = window.navigator.userAgent.toLowerCase();
  const isIos = (/iphone|ipad|ipod/i.test(ua));
  const isAndroid = /android/i.test(ua);
  const isWechat = ((/micromessenger/i.test(ua) && !/wxwork/.test(ua))
    || /windows phone/.test(ua)
    || /miniprogram/.test(ua));
  return {
    isIos: () => isIos && !isWechat,
    isAndroid: () => isAndroid && !isWechat,
    isWechat: () => isWechat,
    isPureAndroid: () => isAndroid,
    isPureIos: () => isIos,
  };
})());

/**
 * 辅助生成zuid的方法
 */
const createUuid = () => {
  let str = "";
  if (device.isWechat() && device.isIos()) {
    str = "iosWechat";
  } else if (device.isWechat() && !device.isIos()) { 
    str = "androidWechat";
  } else if (device.isIos()) {
    str = "ios";
  } else {
    str = "android";
  }
  const stb = 'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    let v;
    if (c === 'x') {
      v = r;
    } else {
      v = ((r & 0x3) | 0x8);
    }
    return v.toString(16);
  });
  return `${stb}|12345678900${str}`;
};

const getStoreUuid = () => {
  let uuid = cookie.get("ZUID");
  if (!uuid) {
    uuid = createUuid();
    localStorage.setItem("ZUID", uuid);
    cookie.set("ZUID", uuid);
  }
  return uuid;
};

const isExit = p => ((p !== null) || (p !== undefined) || (p !== '') || (p !== ' ') || (!isNaN(p)));

export default {
  formateDate,
  getQueryName,
  device,
  isExit,
  getStoreUuid,
};
