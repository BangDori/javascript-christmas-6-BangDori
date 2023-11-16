import { BEVERAGE_MENU } from '../../src/constant/menu/beverage.js';
import { DESSERT } from '../../src/constant/menu/dessert.js';
import { MAIN } from '../../src/constant/menu/main.js';
import OrderInfo from '../../src/domain/OrderInfo.js';

describe('주문 정보 클래스 테스트', () => {
  const date = 1;
  const menuList = [
    ['양송이수프', 1],
    ['티본스테이크', 1],
    ['초코케이크', 1],
    ['레드와인', 1],
  ];
  let orderInfo;

  beforeEach(() => {
    orderInfo = new OrderInfo(date, menuList);
  });

  test('총 주문 금액 테스트', () => {
    const orderAmount = orderInfo.getOrderAmount();
    expect(orderAmount).toBe(136000);
  });

  test('증정 메뉴 추가 테스트', () => {
    orderInfo.presentGift(BEVERAGE_MENU.샴페인.name);

    const giftMenu = orderInfo
      .getMenuList()
      .filter(([name, count]) => name === BEVERAGE_MENU.샴페인.name);

    expect(giftMenu.length).toBe(1);
  });

  test('디저트 메뉴 개수 확인 테스트', () => {
    const dessertCount = orderInfo.getCountByType(DESSERT);

    expect(dessertCount).toBe(1);
  });

  test('메인 메뉴 개수 확인 테스트', () => {
    const mainCount = orderInfo.getCountByType(MAIN);

    expect(mainCount).toBe(1);
  });
});
