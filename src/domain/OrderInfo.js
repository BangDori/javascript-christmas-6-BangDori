import MENU_BOARD from '../constant/menu/board.js';

class OrderInfo {
  #reservationDate;
  #menuList;

  constructor(reservationDate, menuList) {
    this.#reservationDate = reservationDate;
    this.#menuList = menuList;
  }

  presentGift(gift) {
    this.#menuList.push([gift, 1]);
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

  getReservationDate() {
    return this.#reservationDate;
  }
}

export default OrderInfo;
