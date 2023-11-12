import { SPECIAL_EVENT } from '../constant/event.js';
import { getCurrentDay } from '../util/date.js';

class SpecialEvent {
  static getDiscount(date) {
    const day = getCurrentDay(date);

    if (day === SPECIAL_EVENT.day) {
      return SPECIAL_EVENT.discount;
    }

    return 0;
  }

  static getDetailInfo(date) {
    const discount = this.getDiscount(date);

    if (discount === 0) {
      return null;
    }

    return `${SPECIAL_EVENT.name}: -${discount.toLocaleString()}원`;
  }
}

export default SpecialEvent;
