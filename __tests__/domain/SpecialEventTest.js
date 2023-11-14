import SpecialEvent from '../../src/domain/event/SpecialEvent';

describe('특별 할인 이벤트 테스트', () => {
  test.each([3, 10, 17, 24, 25, 31])('12월 %i일 특별 할인 적용', date => {
    const { discount } = SpecialEvent.getBenefitInfo(date);
    expect(discount).toBe(1000);
  });

  // 12.04 월요일 ~ 12.09 금요일
  test.each([4, 5, 6, 7, 8, 9])(
    '일요일과 크리스마스 당일 외 특별 할인 미적용',
    date => {
      const event = SpecialEvent.getBenefitInfo(date);
      expect(event).toBe(null);
    },
  );
});
