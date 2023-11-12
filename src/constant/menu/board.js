import { APPETIZER_MENU } from './appetizer.js';
import { MAIN_MENU } from './main.js';
import { DESSERT_MENU } from './dessert.js';
import { BEVERAGE_MENU } from './beverage.js';

const MENU_BOARD = Object.freeze({
  ...APPETIZER_MENU,
  ...MAIN_MENU,
  ...DESSERT_MENU,
  ...BEVERAGE_MENU,
});

export default MENU_BOARD;
