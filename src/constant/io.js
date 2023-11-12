import { EVENT_DATE } from './date.js';

export const INPUT = Object.freeze({
  date: `${EVENT_DATE.month}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
  menuList:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT = Object.freeze({
  welcom: `안녕하세요! 우테코 식당 ${EVENT_DATE.month}월 이벤트 플래너입니다.`,
  previewEvent: date =>
    `${EVENT_DATE.month}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderDetails: '\n<주문 메뉴>',
  orderAmount: '\n<할인 전 총주문 금액>',
});
