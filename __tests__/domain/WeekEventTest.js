import { WEEK_EVENT } from '../../src/constant/event';
import WeekEvent from '../../src/domain/event/WeekEvent';
import OrderInfo from '../../src/domain/OrderInfo';

describe('주중 이벤트 클래스 테스트', () => {
  let orderInfo;

  test('일, 월, 화, 수, 목요일 평일 이벤트 적용', () => {
    // 12.03 일요일 ~ 12.08 목요일
    const dates = [3, 4, 5, 6, 7];

    dates.forEach(date => {
      orderInfo = new OrderInfo(date, [['아이스크림', 1]]);
      const { event, discount } = WeekEvent.getBenefitInfo(orderInfo, date);

      expect(event).toBe(WEEK_EVENT.weekday.name);
      expect(discount).toBe(2023);
    });
  });

  test('금, 토 주말 이벤트 적용', () => {
    // 12.08 금요일 ~ 12.9 토요일
    const dates = [8, 9];

    dates.forEach(date => {
      orderInfo = new OrderInfo(date, [['티본스테이크', 1]]);
      const { event, discount } = WeekEvent.getBenefitInfo(orderInfo, date);

      expect(event).toBe(WEEK_EVENT.weekend.name);
      expect(discount).toBe(2023);
    });
  });
});
