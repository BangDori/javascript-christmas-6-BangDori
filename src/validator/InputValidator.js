import InputError from '../error/InputError.js';

const datePattern = /^\d+$/;

class InputValidator {
  static validateDate(date) {
    if (!datePattern.test(date)) {
      throw new InputError('유효하지 않은 날짜입니다.');
    }
  }
}

export default InputValidator;
