import SpecialEvent from '../../src/domain/event/SpecialEvent';

describe('특별 할인 이벤트 테스트', () => {
  test('일요일 특별 할인 적용', () => {
    const date = 3; // 12.03 일요일
    const discount = SpecialEvent.getDiscount(date);

    expect(discount).toBe(1000);
  });

  test('일요일 외 다른 요일 특별 할인 미적용', () => {
    // 12.04 월요일 ~ 12.09 금요일
    const dates = [4, 5, 6, 7, 8, 9];

    dates.forEach(date => {
      const discount = SpecialEvent.getDiscount(date);

      expect(discount).toBe(0);
    });
  });
});
