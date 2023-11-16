import GiftEvent from './event/GiftEvent.js';
import ChristmasEvent from './event/ChristmasEvent.js';
import WeekEvent from './event/WeekEvent.js';
import SpecialEvent from './event/SpecialEvent.js';
import BadgeEvent from './event/BadgeEvent.js';
import { EVENT_PARTICIPATION_PRICE } from '../constant/event.js';

class EventManager {
  static calculateEventBenefits(orderInfo) {
    const orderAmount = orderInfo.getOrderAmount();
    if (orderAmount < EVENT_PARTICIPATION_PRICE) {
      return [];
    }

    const reservationDate = orderInfo.getReservationDate();
    const christmas = ChristmasEvent.getBenefitInfo(reservationDate);
    const week = WeekEvent.getBenefitInfo(orderInfo, reservationDate);
    const special = SpecialEvent.getBenefitInfo(reservationDate);
    const gift = GiftEvent.getBenefitInfo(orderAmount);

    return [christmas, week, special, gift].filter(Boolean);
  }

  static getBenefitDetails(orderInfo) {
    const benefitDetails = this.calculateEventBenefits(orderInfo);

    if (benefitDetails.length === 0) {
      return null;
    }

    return benefitDetails;
  }

  static getBenefitAmount(orderInfo) {
    const benefitDetails = this.calculateEventBenefits(orderInfo);
    const benefitAmount = benefitDetails.reduce(
      (acc, { discount }) => acc + discount,
      0,
    );

    return benefitAmount;
  }

  static getBadge(benefitAmount) {
    const badge = BadgeEvent.getBadge(benefitAmount);

    return badge;
  }
}

export default EventManager;
