export const EVENT_DATE = Object.freeze({
  year: 2023,
  month: 12,
  start: 1,
  end: 31,
  christmas: 25,
});

export const DAY = Object.freeze({
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
});

export const WEEKDAY = Object.freeze({
  name: '평일',
  start: 0, // 일요일
  end: 4, // 목요일
});

export const WEEKEND = Object.freeze({
  name: '주말',
  start: 5, // 금요일
  end: 6, // 토툐일
});
