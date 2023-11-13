import retryOnError from './util/retry.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import OrderInfo from './domain/OrderInfo.js';
import EventController from './controller/eventController.js';

class App {
  async run() {
    const orderInfo = await this.inputOrderInfo();

    this.showOrderDetails(orderInfo);

    const eventController = new EventController();
    eventController.checkGiftEvent(orderInfo);
    eventController.checkBenefitDetails(orderInfo);
    eventController.checkAmounts(orderInfo);
    eventController.checkBadge(orderInfo);
  }

  async inputOrderInfo() {
    OutputView.printWelcome();

    const reservationDate = await retryOnError(InputView.readDate);
    const menuList = await retryOnError(InputView.readMenuList);

    OutputView.printPreviewEvent(reservationDate);

    return new OrderInfo(reservationDate, menuList);
  }

  showOrderDetails(orderInfo) {
    const recepitDetails = orderInfo.getReceiptDetails();
    const orderAmount = orderInfo.getOrderAmount();

    OutputView.printOrderInfo(recepitDetails, orderAmount);
  }
}

export default App;
