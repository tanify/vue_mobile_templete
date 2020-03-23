/* eslint-disable */
import axios from 'axios';
import com from '@/utils/utilty';
import cookie from '@/utils/Cookie';
import config from '@/config';
import $ from '@/utils/tool';

window.GlobalSources = { ajaxCancel: [] };

axios.interceptors.request.use((conf) => {
  // conf.headers[] ='';
  return conf;
}, error => Promise.reject(error));
// 添加响应拦截器
axios.interceptors.response.use(response => response, (error) => {
  
});
export default function Ajax(method) {
  const { CancelToken } = axios;
  return function (url, data, onSuccess, onFail, msg) {
    if (method === "all" && Array.isArray(url)) {
      onSuccess = data;
      data = {};
      return axios.all(url).then(axios.spread(() => {
        if (onSuccess) {
          onSuccess();
        }
      })).catch(() => {
        if (onFail) {
          onFail();
        }
      });
    }
    if (typeof data === 'function') {
      msg = onFail;
      onFail = onSuccess;
      onSuccess = data;
      data = {};
      if (method === "get") {
        data = '';
      }
    }
    axios({
      method,
      url: url,
      responseType: 'json',
      data,
      cancelToken: new CancelToken((cs) => {
        window.GlobalSources.ajaxCancel.push(cs);
      }),
    }).then((result) => {
      try {
        if (result.status === 200 || result.success) {
          const { status, message } = result.data;
          if (onSuccess) {
            onSuccess(result.data);
          }
        }
      } catch (error) {
        Promise.reject(error);
      }
    }).catch((content) => {
      if (onFail) {
      
      }
    });
  };
}
export const requestGet = Ajax("get");
export const requestPost = Ajax("post");
export const requestAll = Ajax("all");
