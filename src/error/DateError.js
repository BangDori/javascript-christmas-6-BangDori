import { ERROR_PREFIX, RETRY_MESSAGE } from '../constant/message/error.js';

class DateError extends Error {
  constructor(message) {
    super(ERROR_PREFIX + message + RETRY_MESSAGE);
    this.name = this.constructor.name;
  }
}

export default DateError;
