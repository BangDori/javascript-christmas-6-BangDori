import MENU_BOARD from '../constant/menu/board.js';
import { MENU_ERROR } from '../constant/error.js';
import MenuError from '../error/MenuError.js';

class MenuValidator {
  static validate(menuList) {
    this.validateMenuExistence(menuList);
    this.validateMenuDuplication(menuList);
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
}

export default MenuValidator;
