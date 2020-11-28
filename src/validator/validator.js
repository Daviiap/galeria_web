/* eslint-disable no-useless-escape */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import util from '../util/util';

const validators = {
  emailReg: new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/),
  passwordReg: new RegExp(/^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/),
  NameValidator(name) {
    if (util.isEmpty(name)) {
      return false;
    }
    return true;
  },
  EmailValidator(email) {
    if (!this.emailReg.test(email)) {
      return false;
    }
    return true;
  },
  PasswordValidator(password) {
    if (!this.passwordReg.test(password)) {
      return false;
    }
    return true;
  },
  DateValidator(age) {
    if (age < 12) {
      return false;
    }
    return true;
  },
};

export default validators;
