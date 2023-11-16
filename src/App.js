import retryOnError from './util/retry.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import OrderInfo from './domain/OrderInfo.js';
import EventController from './controller/EventController.js';

class App {
  async run() {
    const orderInfo = await this.inputOrderInfo();
    this.showOrderInfo(orderInfo);
    this.processEvents(orderInfo);
  }

  async inputOrderInfo() {
    OutputView.printWelcome();

    const reservationDate = await retryOnError(InputView.readDate);
    const menuList = await retryOnError(InputView.readMenuList);

    OutputView.printPreviewEvent(reservationDate);

    return new OrderInfo(reservationDate, menuList);
  }

  showOrderInfo(orderInfo) {
    const menuList = orderInfo.getMenuList();
    const orderAmount = orderInfo.getOrderAmount();

    OutputView.printOrderInfo(menuList, orderAmount);
  }

  processEvents(orderInfo) {
    const eventController = new EventController(orderInfo);
    eventController.checkGiftEvent();
    eventController.checkBenefitDetails();
    eventController.checkAmounts();
    eventController.checkBadge();
  }
}

export default App;
