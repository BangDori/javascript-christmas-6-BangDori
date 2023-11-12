import OutputView from '../view/OutputView.js';
import GiftEvent from '../domain/event/GiftEvent.js';

class EventController {
  checkGiftEvent(orderAmount) {
    const gift = GiftEvent.getGift(orderAmount);
    OutputView.printGiftInfo(gift);
  }
}

export default EventController;
