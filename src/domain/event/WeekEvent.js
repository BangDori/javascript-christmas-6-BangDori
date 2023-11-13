import { WEEKDAY, WEEKEND } from '../../constant/date.js';
import { WEEK_EVENT } from '../../constant/event.js';
import { DESSERT } from '../../constant/menu/dessert.js';
import { MAIN } from '../../constant/menu/main.js';
import { getCurrentDayType } from '../../util/date.js';

class WeekEvent {
  static getBenefitInfo(orderInfo, date) {
    const day = getCurrentDayType(date);

    switch (day) {
      case WEEKDAY.name:
        return this.getWeekdayDiscount(orderInfo);
      case WEEKEND.name:
        return this.getWeekendDiscount(orderInfo);
      default:
        return 0;
    }
  }

  static getWeekdayDiscount(orderInfo) {
    const dessertCount = orderInfo.getCountByType(DESSERT);
    const discount = dessertCount * WEEK_EVENT.weekday.perDessert;

    if (discount === 0) {
      return null;
    }

    return { event: WEEK_EVENT.weekday.name, discount };
  }

  static getWeekendDiscount(orderInfo) {
    const mainCount = orderInfo.getCountByType(MAIN);
    const discount = mainCount * WEEK_EVENT.weekend.perMain;

    if (discount === 0) {
      return null;
    }

    return { event: WEEK_EVENT.weekend.name, discount };
  }
}

export default WeekEvent;
