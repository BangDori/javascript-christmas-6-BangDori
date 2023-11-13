import GiftEvent from '../domain/event/GiftEvent.js';
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
}

export default EventController;
