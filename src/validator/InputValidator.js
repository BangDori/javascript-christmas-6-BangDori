import { DATE_ERROR, MENU_ERROR } from '../constant/message/error.js';
import InputError from '../error/InputError.js';

const datePattern = /^\d+$/;
const menuPattern = /^(?:[가-힣]+-\d+(?:,\s*[가-힣]+-\d+)*)$/;

class InputValidator {
  static validateDate(date) {
    if (!datePattern.test(date)) {
      throw new InputError(DATE_ERROR);
    }
  }

  static validateMenu(menuList) {
    if (!menuPattern.test(menuList)) {
      throw new InputError(MENU_ERROR);
    }
  }
}

export default InputValidator;
