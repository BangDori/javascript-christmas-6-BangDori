const MAIN = 'main';

const 티본스테이크 = Object.freeze({
  type: MAIN,
  name: '티본스테이크',
  price: 55000,
});

const 바비큐립 = Object.freeze({
  type: MAIN,
  name: '바비큐립',
  price: 54000,
});

const 해산물파스타 = Object.freeze({
  type: MAIN,
  name: '해산물파스타',
  price: 35000,
});

const 크리스마스파스타 = Object.freeze({
  type: MAIN,
  name: '크리스마스파스타',
  price: 25000,
});

const MAIN_MENU = Object.freeze({
  티본스테이크,
  바비큐립,
  해산물파스타,
  크리스마스파스타,
});

export { MAIN, MAIN_MENU };
