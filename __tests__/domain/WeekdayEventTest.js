import WeekDayEvent from '../../src/domain/WeekdayEvent';

describe('평일 이벤트 클래스 테스트', () => {
  const dessertCount = 1;

  test('일, 월, 화, 수, 목요일 이벤트 적용', () => {
    // 12.03 일요일 ~ 12.08 목요일
    const dates = [3, 4, 5, 6, 7];

    dates.forEach(date => {
      const discount = WeekDayEvent.getDiscount(date, dessertCount);
      expect(discount).toBe(2023);
    });
  });

  test('금, 토 이벤트 미적용', () => {
    // 12.08 금요일 ~ 12.9 토요일
    const dates = [8, 9];

    dates.forEach(date => {
      const discount = WeekDayEvent.getDiscount(date, dessertCount);
      expect(discount).toBe(0);
    });
  });
});
