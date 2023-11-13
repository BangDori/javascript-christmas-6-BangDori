import SpecialEvent from '../../src/domain/event/SpecialEvent';

describe('특별 할인 이벤트 테스트', () => {
  test.each([
    { date: 3 },
    { date: 10 },
    { date: 17 },
    { date: 24 },
    { date: 25 }, // 크리스마스
    { date: 31 },
  ])('12월 $date 일 특별 할인 적용', ({ date }) => {
    const { discount } = SpecialEvent.getBenefitInfo(date);
    expect(discount).toBe(1000);
  });

  test('일요일 외 다른 요일 특별 할인 미적용', () => {
    // 12.04 월요일 ~ 12.09 금요일
    const dates = [4, 5, 6, 7, 8, 9];

    dates.forEach(date => {
      const event = SpecialEvent.getBenefitInfo(date);
      expect(event).toBe(null);
    });
  });
});
