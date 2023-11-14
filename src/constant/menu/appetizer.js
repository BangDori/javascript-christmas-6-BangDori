const APPETIZER = 'appetizer';

const 양송이수프 = Object.freeze({
  type: APPETIZER,
  name: '양송이수프',
  price: 6000,
});

const 타파스 = Object.freeze({
  type: APPETIZER,
  name: '타파스',
  price: 5500,
});

const 시저샐러드 = Object.freeze({
  type: APPETIZER,
  name: '시저샐러드',
  price: 8000,
});

const APPETIZER_MENU = Object.freeze({
  양송이수프,
  타파스,
  시저샐러드,
});

export { APPETIZER, APPETIZER_MENU };
