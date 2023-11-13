import GiftEvent from './event/GiftEvent.js';
import ChristmasEvent from './event/ChristmasEvent.js';
import WeekEvent from './event/WeekEvent.js';
import SpecialEvent from './event/SpecialEvent.js';
import BadgeEvent from './event/BadgeEvent.js';

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

  static getBenefitDetails(orderInfo) {
    const benefitDetails = this.getBenefits(orderInfo);

    if (benefitDetails.length === 0) {
      return null;
    }

    return benefitDetails;
  }

  static getBenefitAmount(orderInfo) {
    const benefitDetails = this.getBenefits(orderInfo);
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
