import { ERROR_PREFIX } from '../constant/error.js';

class DateError extends Error {
  constructor(message) {
    super(ERROR_PREFIX + message);
    this.name = this.constructor.name;
  }
}

export default DateError;
