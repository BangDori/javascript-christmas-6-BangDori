import retryOnError from './util/retry.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const { date, menuList } = await this.inputOrderInfo();
  }

  async inputOrderInfo() {
    OutputView.printWelcome();

    const date = await retryOnError(InputView.readDate);
    const menuList = await retryOnError(InputView.readMenuList);

    OutputView.printPreviewEvent(date);
    return { date, menuList };
  }
}

export default App;
