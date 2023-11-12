import { GIFT_EVENT, NO_BENEFIT } from '../../constant/event.js';

class GiftEvent {
  static getGift(totalPrice) {
    if (totalPrice < GIFT_EVENT.requried) {
      return NO_BENEFIT;
    }

    return GIFT_EVENT.goods;
  }

  static getDetailInfo(totalPrice) {
    const gift = this.getGift(totalPrice);
    if (!gift) {
      return null;
    }

    const { name, price } = gift;

    return `${name}: -${price.toLocaleString()}원`;
  }
}

export default GiftEvent;
