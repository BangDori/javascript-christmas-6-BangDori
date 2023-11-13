import retryOnError from './util/retry.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import OrderInfo from './domain/OrderInfo.js';
import EventController from './controller/eventController.js';

class App {
  #orderInfo;

  async run() {
    await this.inputOrderInfo();
    this.showOrderDetails();
    this.checkEvents();
  }

  async inputOrderInfo() {
    OutputView.printWelcome();

    const date = await retryOnError(InputView.readDate);
    const menuList = await retryOnError(InputView.readMenuList);

    OutputView.printPreviewEvent(date);

    this.#orderInfo = new OrderInfo(date, menuList);
  }

  showOrderDetails() {
    const recepitDetails = this.#orderInfo.getReceiptDetails();
    const orderAmount = this.#orderInfo.getOrderAmount();

    OutputView.printOrderInfo(recepitDetails, orderAmount);
  }

  checkEvents() {
    const eventController = new EventController();
    eventController.checkGiftEvent(this.#orderInfo);
  }
}

export default App;
