import MENU_BOARD from '../constant/menu/board.js';

class OrderInfo {
  #menuList;

  constructor(menuList) {
    this.#menuList = menuList;
  }

  getOrderAmount() {
    return this.#menuList.reduce((acc, [name, count]) => {
      return acc + MENU_BOARD[name].price * count;
    }, 0);
  }

  getMenuList() {
    return this.#menuList;
  }
}

export default OrderInfo;
