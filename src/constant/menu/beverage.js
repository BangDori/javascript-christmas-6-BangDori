const BEVERAGE = 'beverage';

const 제로콜라 = Object.freeze({
  type: BEVERAGE,
  name: '제로콜라',
  price: 3000,
});

const 레드와인 = Object.freeze({
  type: BEVERAGE,
  name: '레드와인',
  price: 60000,
});

const 샴페인 = Object.freeze({
  type: BEVERAGE,
  name: '샴페인',
  price: 25000,
});

const BEVERAGE_MENU = Object.freeze({
  제로콜라,
  레드와인,
  샴페인,
});

export { BEVERAGE, BEVERAGE_MENU };
