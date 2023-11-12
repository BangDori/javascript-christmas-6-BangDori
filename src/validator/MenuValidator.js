import MENU_BOARD from '../constant/menu/board.js';
import { MENU_ERROR } from '../constant/error.js';
import MenuError from '../error/MenuError.js';

class MenuValidator {
  static validateMenuExistence(menuList) {
    menuList.forEach(menu => {
      if (!MENU_BOARD[menu[0]]) {
        throw new MenuError(MENU_ERROR.existence);
      }
    });
  }
}

export default MenuValidator;
