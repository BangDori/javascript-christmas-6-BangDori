import { SPECIAL_EVENT } from '../constant/event.js';
import { DAY, EVENT_DATE } from '../constant/date.js';

class SpecialEvent {
  static getDiscount(date) {
    const { year, month } = EVENT_DATE;
    const reservationDate = new Date(`${year}-${month}-${date}`);
    const dayNumber = reservationDate.getDay();
    const day = DAY[dayNumber];

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
