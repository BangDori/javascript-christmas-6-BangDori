import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constant/io.js';

const OutputView = {
  printWelcome() {
    Console.print(OUTPUT.welcom);
  },

  printPreviewEvent(date) {
    Console.print(OUTPUT.previewEvent(date));
  },

  printError(error) {
    Console.print(error);
  },

  printOrderInfo(recepitDetails, orderAmount) {
    Console.print(OUTPUT.orderDetails);
    recepitDetails.forEach(detail => Console.print(detail));

    Console.print(OUTPUT.orderAmount);
    Console.print(`${orderAmount.toLocaleString()}원`);
  },
};

export default OutputView;
