import { INPUT_ERROR } from '../constant/error.js';
import InputError from '../error/InputError.js';

const datePattern = /^\d+$/;

class InputValidator {
  static validateDate(date) {
    if (!datePattern.test(date)) {
      throw new InputError(INPUT_ERROR.date);
    }
  }
}

export default InputValidator;
