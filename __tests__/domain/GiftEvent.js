import { GIFT_EVENT } from '../../src/constant/event.js';
import GiftEvent from '../../src/domain/event/GiftEvent.js';

describe('증정 이벤트 테스트', () => {
  test('12만원 이상일 경우 샴페인 증정', () => {
    const gift = GiftEvent.getBenefitInfo(120000);

    expect(gift.event).toBe(GIFT_EVENT.name);
    expect(gift.name).toBe('샴페인');
  });

  test('12만원보다 적을 경우 샴페인 미증정', () => {
    const gift = GiftEvent.getBenefitInfo(119999);

    expect(gift).toBe(null);
  });
});
