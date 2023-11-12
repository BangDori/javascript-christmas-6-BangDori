import OrderInfo from '../../src/domain/OrderInfo';

describe('주문 정보 클래스 테스트', () => {
  test('총 주문 금액 테스트', () => {
    const menuList = [
      ['양송이수프', 1],
      ['티본스테이크', 1],
      ['초코케이크', 1],
      ['레드와인', 1],
    ];

    const orderInfo = new OrderInfo(menuList);
    const orderAmount = orderInfo.getOrderAmount();
    expect(orderAmount).toBe(136000);
  });
});
