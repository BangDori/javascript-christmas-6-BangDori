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

  getCountByType(type) {
    return this.#menuList.reduce((acc, [name, count]) => {
      if (MENU_BOARD[name].type === type) {
        return acc + count;
      }
      return acc;
    }, 0);
  }

  getReceiptDetails() {
    return this.#menuList.map(([menu, count]) => `${menu} ${count}개`);
  }
}

export default OrderInfo;
