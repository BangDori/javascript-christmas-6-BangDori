import { EVENT_DATE } from '../constant/date.js';
import { DATE_ERROR } from '../constant/message/error.js';
import DateError from '../error/DateError.js';

class DateValidator {
  static validateRange(date) {
    if (date < EVENT_DATE.start || date > EVENT_DATE.end) {
      throw new DateError(DATE_ERROR.range);
    }
  }
}

export default DateValidator;
