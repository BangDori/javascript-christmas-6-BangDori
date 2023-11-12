import { WEEKEND } from '../../constant/date.js';
import { WEEKEND_EVENT } from '../../constant/event.js';
import { getCurrentDayType } from '../../util/date.js';

class WeekendEvent {
  static getDiscount(date, mainCount) {
    const day = getCurrentDayType(date);
    if (day !== WEEKEND.name) {
      return 0;
    }

    const discount = mainCount * WEEKEND_EVENT.perMain;
    return discount;
  }

  static getDetailInfo(mainCount) {
    const discount = this.getDiscount(mainCount);
    if (discount === 0) {
      return null;
    }

    return `${WEEKEND_EVENT.name}: -${discount.toLocaleString()}원`;
  }
}

export default WeekendEvent;
