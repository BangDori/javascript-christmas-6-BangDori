import { ERROR_PREFIX, RETRY_MESSAGE } from '../constant/error.js';

class InputError extends Error {
  constructor(message) {
    super(ERROR_PREFIX + message + RETRY_MESSAGE);
    this.name = this.constructor.name;
  }
}

export default InputError;
