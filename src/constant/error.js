import { MENU_COUNT } from './setting.js';

export const ERROR_PREFIX = '[ERROR] ';

export const INPUT_ERROR = Object.freeze({
  date: '유효하지 않은 날짜입니다.',
  menu: '유효하지 않은 주문입니다.',
});

export const DATE_ERROR = Object.freeze({
  range: '유효하지 않은 날짜입니다.',
});

export const MENU_ERROR = Object.freeze({
  existence: '존재하지 않는 메뉴입니다.',
  duplication: '중복되는 메뉴가 존재합니다.',
  onlyBeverage: '음료만 주문할 수 없습니다.',
  count: `메뉴는 ${MENU_COUNT.min}개 이상 ${MENU_COUNT.max}개 이하만 주문 가능합니다.`,
});
