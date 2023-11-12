import { WEEKDAY } from '../../constant/date.js';
import { WEEKDAY_EVENT } from '../../constant/event.js';
import { getCurrentDayType } from '../../util/date.js';

class WeekDayEvent {
  static getDiscount(date, dessertCount) {
    const day = getCurrentDayType(date);
    if (day !== WEEKDAY.name) {
      return 0;
    }

    const discount = dessertCount * WEEKDAY_EVENT.perDessert;
    return discount;
  }

  static getDetailInfo(dessertCount) {
    const discount = this.getDiscount(dessertCount);
    if (discount === 0) {
      return null;
    }

    return `${WEEKDAY_EVENT.name}: -${discount.toLocaleString()}원`;
  }
}

export default WeekDayEvent;
