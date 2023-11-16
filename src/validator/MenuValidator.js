import MENU_BOARD from '../constant/menu/board.js';
import { MENU_ERROR } from '../constant/message/error.js';
import MenuError from '../error/MenuError.js';
import { BEVERAGE } from '../constant/menu/beverage.js';
import { MENU_COUNT } from '../constant/setting.js';

class MenuValidator {
  static validate(menuList) {
    const nameList = menuList.map(menu => menu[0]);
    this.validateMenuExistence(nameList);
    this.validateMenuDuplication(nameList);
    this.validateBeverageOnlyOrder(nameList);

    const countList = menuList.map(menu => menu[1]);
    this.validateMenuCount(countList);
  }

  static validateMenuExistence(nameList) {
    nameList.forEach(name => {
      if (!MENU_BOARD[name]) {
        throw new MenuError(MENU_ERROR);
      }
    });
  }

  static validateMenuDuplication(nameList) {
    const uniqueNameList = new Set(nameList);

    if (uniqueNameList.size !== nameList.length) {
      throw new MenuError(MENU_ERROR);
    }
  }

  static validateBeverageOnlyOrder(nameList) {
    const count = nameList.reduce((acc, name) => {
      if (MENU_BOARD[name].type === BEVERAGE) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (count === nameList.length) {
      throw new MenuError(MENU_ERROR);
    }
  }

  static validateMenuCount(countList) {
    const totalCount = countList.reduce((acc, count) => acc + count, 0);

    if (totalCount < MENU_COUNT.min || totalCount > MENU_COUNT.max) {
      throw new MenuError(MENU_ERROR);
    }
  }
}

export default MenuValidator;
