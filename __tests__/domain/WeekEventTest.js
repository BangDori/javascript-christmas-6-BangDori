import { WEEK_EVENT } from '../../src/constant/event.js';
import WeekEvent from '../../src/domain/event/WeekEvent.js';
import OrderInfo from '../../src/domain/OrderInfo.js';

describe('주중 이벤트 클래스 테스트', () => {
  let orderInfo;

  // 12.03 일요일 ~ 12.08 목요일
  test.each([3, 4, 5, 6, 7])(
    '일, 월, 화, 수, 목요일 평일 이벤트 적용',
    date => {
      orderInfo = new OrderInfo(date, [['아이스크림', 1]]);
      const { event, discount } = WeekEvent.getBenefitInfo(orderInfo, date);

      expect(event).toBe(WEEK_EVENT.weekday.name);
      expect(discount).toBe(2023);
    },
  );

  // 12.08 금요일 ~ 12.9 토요일
  test.each([8, 9])('금, 토 주말 이벤트 적용', date => {
    orderInfo = new OrderInfo(date, [['티본스테이크', 1]]);
    const { event, discount } = WeekEvent.getBenefitInfo(orderInfo, date);

    expect(event).toBe(WEEK_EVENT.weekend.name);
    expect(discount).toBe(2023);
  });
});
