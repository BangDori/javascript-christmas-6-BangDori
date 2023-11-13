import { GIFT_EVENT } from '../../constant/event.js';

class GiftEvent {
  static getBenefitInfo(totalPrice) {
    if (totalPrice < GIFT_EVENT.requried) {
      return null;
    }

    return {
      event: GIFT_EVENT.name,
      name: GIFT_EVENT.goods.name,
      price: GIFT_EVENT.goods.price,
    };
  }
}

export default GiftEvent;
