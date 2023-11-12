class OrderInfo {
  #menuList;

  constructor(menuList) {
    this.#menuList = menuList;
  }

  getMenuList() {
    return this.#menuList;
  }
}

export default OrderInfo;
