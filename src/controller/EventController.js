import GiftEvent from '../domain/event/GiftEvent.js';
import EventManager from '../domain/EventManager.js';
import OutputView from '../view/OutputView.js';

class EventController {
  #orderInfo;

  constructor(orderInfo) {
    this.#orderInfo = orderInfo;
  }

  checkGiftEvent() {
    const orderAmount = this.#orderInfo.getOrderAmount();
    const gift = GiftEvent.getBenefitInfo(orderAmount);

    if (gift) {
      this.#orderInfo.presentGift(gift.name);
    }

    OutputView.printGiftInfo(gift);
  }

  checkBenefitDetails() {
    const benefitsDetail = EventManager.getBenefitDetails(this.#orderInfo);
    OutputView.printBenefitDetails(benefitsDetail);
  }

  checkAmounts() {
    const benefitAmount = EventManager.getBenefitAmount(this.#orderInfo);
    OutputView.printBenefitAmount(benefitAmount);

    const orderAmount = this.#orderInfo.getOrderAmount();
    const finalOrderAmount = orderAmount - benefitAmount;
    OutputView.printFinalOrderAmount(finalOrderAmount);
  }

  checkBadge() {
    const benefitAmount = EventManager.getBenefitAmount(this.#orderInfo);
    const badge = EventManager.getBadge(benefitAmount);

    OutputView.printEventBadge(badge);
  }
}

export default EventController;
