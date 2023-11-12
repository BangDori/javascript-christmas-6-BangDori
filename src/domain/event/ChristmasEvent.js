import { CHRISTMAS_EVENT } from '../constant/event.js';
import { EVENT_DATE } from '../constant/date.js';

class ChristmasEvent {
  static getDiscount(date) {
    if (date > EVENT_DATE.christmas) {
      return 0;
    }

    const { base, perDate } = CHRISTMAS_EVENT;
    const discount = base + date * perDate;

    return discount;
  }

  static getDetailInfo(date) {
    const discount = this.getDiscount(date);
    if (discount === 0) {
      return null;
    }

    return `${CHRISTMAS_EVENT.name}: -${discount.toLocaleString()}원`;
  }
}

export default ChristmasEvent;
