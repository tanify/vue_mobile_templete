function getCookie(name) {
  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    if (arr && arr[2]) {
      return (decodeURIComponent(arr[2]));
    }
    return null;
  }
  return null;
}
function setCookie(name, value, Days) {
  const upcurrentDomian = '';
  if (!Days) Days = 3000;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};domain=${upcurrentDomian};expires=${exp.toGMTString()};path=/`;
}
function delCookie(name) {
  setCookie(name, '', -1);
}

export default {
  set: setCookie,
  get: getCookie,
  del: delCookie,
};
