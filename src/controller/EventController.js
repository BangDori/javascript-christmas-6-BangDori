import GiftEvent from '../domain/event/GiftEvent.js';
import EventManager from '../domain/EventManager.js';
import OutputView from '../view/OutputView.js';

class EventController {
  #orderInfo;
  #orderAmount;

  constructor(orderInfo) {
    this.#orderInfo = orderInfo;
    this.#orderAmount = orderInfo.getOrderAmount();
  }

  checkGiftEvent() {
    const gift = GiftEvent.getBenefitInfo(this.#orderAmount);

    if (gift) {
      this.#orderInfo.presentGift(gift.name);
      this.#orderAmount = this.#orderInfo.getOrderAmount();
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

    const finalOrderAmount = this.#orderAmount - benefitAmount;
    OutputView.printFinalOrderAmount(finalOrderAmount);
  }

  checkBadge() {
    const benefitAmount = EventManager.getBenefitAmount(this.#orderInfo);
    const badge = EventManager.getBadge(benefitAmount);

    OutputView.printEventBadge(badge);
  }
}

export default EventController;
