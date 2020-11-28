const util = {
  isEmpty(param) {
    return param === '';
  },
  hasLength(param, minLength) {
    return param.length >= minLength;
  },
  equal(string1, string2) {
    return string1 === string2;
  },
  getAge(birthday) {
    const millis = Date.now() - Date.parse(birthday);
    return new Date(millis).getFullYear() - 1970;
  },
};

export default util;
