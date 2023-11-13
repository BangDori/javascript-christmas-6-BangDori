import GiftEvent from '../domain/event/GiftEvent.js';
import EventManager from '../domain/EventManager.js';
import OutputView from '../view/OutputView.js';

class EventController {
  checkGiftEvent(orderInfo) {
    const orderAmount = orderInfo.getOrderAmount();
    const gift = GiftEvent.getBenefitInfo(orderAmount);

    if (gift) {
      orderInfo.presentGift(gift.name);
    }

    OutputView.printGiftInfo(gift);
  }

  checkBenefitDetails(orderInfo) {
    const benefitsDetail = EventManager.getBenefitDetails(orderInfo);
    OutputView.printBenefitDetails(benefitsDetail);
  }

  checkAmounts(orderInfo) {
    const benefitAmount = EventManager.getBenefitAmount(orderInfo);
    OutputView.printBenefitAmount(benefitAmount);

    const orderAmount = orderInfo.getOrderAmount();
    const finalOrderAmount = orderAmount - benefitAmount;
    OutputView.printFinalOrderAmount(finalOrderAmount);
  }

  checkBadge(orderInfo) {
    const benefitAmount = EventManager.getBenefitAmount(orderInfo);
    const badge = EventManager.getBadge(benefitAmount);

    OutputView.printEventBadge(badge);
  }
}

export default EventController;
