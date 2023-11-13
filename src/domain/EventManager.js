import GiftEvent from './event/GiftEvent.js';
import ChristmasEvent from './event/ChristmasEvent.js';
import WeekEvent from './event/WeekEvent.js';
import SpecialEvent from './event/SpecialEvent.js';

class EventManager {
  static getBenefits(orderInfo) {
    const orderAmount = orderInfo.getOrderAmount();
    const date = orderInfo.getReservationDate();

    const christmas = ChristmasEvent.getBenefitInfo(date);
    const week = WeekEvent.getBenefitInfo(orderInfo, date);
    const special = SpecialEvent.getBenefitInfo(date);
    const gift = GiftEvent.getBenefitInfo(orderAmount);

    const benefits = [christmas, week, special, gift].filter(Boolean);
    return benefits;
  }
}

export default EventManager;
