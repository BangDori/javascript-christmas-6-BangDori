import { GIFT_EVENT } from '../../src/constant/event';
import GiftEvent from '../../src/domain/event/GiftEvent';

describe('증정 이벤트 테스트', () => {
  test('12만원 이상일 경우 샴페인 증정', () => {
    const gift = GiftEvent.getBenefitInfo(120_000);

    expect(gift.event).toBe(GIFT_EVENT.name);
    expect(gift.name).toBe('샴페인');
  });

  test('12만원보다 적을 경우 샴페인 미증정', () => {
    const gift = GiftEvent.getBenefitInfo(120_000 - 1);

    expect(gift).toBe(null);
  });
});
