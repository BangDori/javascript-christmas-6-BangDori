import OutputView from '../view/OutputView.js';
import GiftEvent from '../domain/event/GiftEvent.js';
import { NO_BENEFIT } from '../constant/event.js';

class EventController {
  checkGiftEvent(orderInfo) {
    const orderAmount = orderInfo.getOrderAmount();
    const gift = GiftEvent.getGift(orderAmount);

    if (gift !== NO_BENEFIT) {
      orderInfo.presentGift([gift.name, gift.price]);
    }

    OutputView.printGiftInfo(gift);
  }
}

export default EventController;
