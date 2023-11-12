import { INPUT_ERROR } from '../constant/error.js';
import InputError from '../error/InputError.js';

const datePattern = /^\d+$/;
const menuPattern = /^(?:[가-힣]+-\d+(?:,\s*[가-힣]+-\d+)*)$/;

class InputValidator {
  static validateDate(date) {
    if (!datePattern.test(date)) {
      throw new InputError(INPUT_ERROR.date);
    }
  }

  static valdiateMenu(menuList) {
    if (!menuPattern.test(menuList)) {
      throw new InputError(INPUT_ERROR.menu);
    }
  }
}

export default InputValidator;
