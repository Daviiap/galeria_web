const util = {
  isEmpty(param) {
    return param === '';
  },
  hasLength(param, minLength) {
    return param.length >= minLength;
  },
  getAge(birthday) {
    const millis = Date.now() - Date.parse(birthday);
    return new Date(millis).getFullYear() - 1970;
  },
};

export default util;
