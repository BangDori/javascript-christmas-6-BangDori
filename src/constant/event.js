import { BEVERAGE, BEVERAGE_MENU } from './menu/beverage.js';
import { EVENT_DATE } from './date.js';

export const NO_BENEFIT = '없음';
export const EVENT_PARTICIPATION_PRICE = 10000;

export const GIFT_EVENT = Object.freeze({
  name: '증정 이벤트',
  category: BEVERAGE,
  goods: BEVERAGE_MENU.샴페인,
  requried: 120000,
});

export const EVENT_BADGE = Object.freeze({
  santa: { name: '산타', required: 20000 },
  tree: { name: '트리', required: 10000 },
  star: { name: '별', required: 5000 },
});

export const CHRISTMAS_EVENT = Object.freeze({
  name: '크리스마스 디데이 할인',
  perDate: 100,
  base: 900,
});

export const WEEK_EVENT = Object.freeze({
  weekday: {
    name: '평일 할인',
    perDessert: EVENT_DATE.year,
  },
  weekend: {
    name: '주말 할인',
    perMain: EVENT_DATE.year,
  },
});

export const SPECIAL_EVENT = Object.freeze({
  name: '특별 할인',
  day: '일요일',
  discount: 1000,
});
