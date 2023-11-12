import MENU_BOARD from '../../src/constant/menu/board';
import GiftEvent from '../../src/domain/event/GiftEvent';

describe('증정 이벤트 테스트', () => {
  test('12만원 이상일 경우 샴페인 증정', () => {
    const gift = GiftEvent.getGift(120_000);

    expect(gift).toBe(MENU_BOARD['샴페인']);
  });

  test('12만원보다 적을 경우 샴페인 미증정', () => {
    const gift = GiftEvent.getGift(120_000 - 1);

    expect(gift).toBe('없음');
  });
});
