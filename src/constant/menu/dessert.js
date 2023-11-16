const DESSERT = 'dessert';

const 초코케이크 = Object.freeze({
  type: DESSERT,
  name: '초코케이크',
  price: 15000,
});

const 아이스크림 = Object.freeze({
  type: DESSERT,
  name: '아이스크림',
  price: 5000,
});

const DESSERT_MENU = Object.freeze({
  초코케이크,
  아이스크림,
});

export { DESSERT, DESSERT_MENU };
