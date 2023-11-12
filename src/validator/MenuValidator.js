import MENU_BOARD from '../constant/menu/board.js';
import { MENU_ERROR } from '../constant/error.js';
import MenuError from '../error/MenuError.js';
import { BEVERAGE } from '../constant/menu/beverage.js';

class MenuValidator {
  static validate(menuList) {
    this.validateMenuExistence(menuList);
    this.validateMenuDuplication(menuList);
    this.validateBeverageOnlyOrder(menuList);
  }

  static validateMenuExistence(menuList) {
    menuList.forEach(menu => {
      if (!MENU_BOARD[menu[0]]) {
        throw new MenuError(MENU_ERROR.existence);
      }
    });
  }

  static validateMenuDuplication(menuList) {
    const nameList = menuList.map(menu => menu[0]);
    const uniqueNameList = new Set(nameList);

    if (uniqueNameList.size !== nameList.length) {
      throw new MenuError(MENU_ERROR.duplication);
    }
  }

  static validateBeverageOnlyOrder(menuList) {
    const count = menuList.reduce((acc, menu) => {
      if (MENU_BOARD[menu[0]].type === BEVERAGE) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (count === menuList.length) {
      throw new MenuError(MENU_ERROR.onlyBeverage);
    }
  }
}

export default MenuValidator;
