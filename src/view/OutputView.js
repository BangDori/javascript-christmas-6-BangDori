import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constant/io.js';
import { NO_BENEFIT } from '../constant/event.js';

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

  printGiftInfo(gift) {
    Console.print(OUTPUT.gift);

    if (!gift) {
      Console.print(NO_BENEFIT);
      return;
    }
    Console.print(`${gift.name} 1개`);
  },

  printBenefitDetails(benefitDetails) {
    Console.print(OUTPUT.benefitDetails);

    if (!benefitDetails) {
      Console.print(NO_BENEFIT);
      return;
    }

    benefitDetails.forEach(benefit => {
      const { event, discount } = benefit;
      Console.print(`${event}: -${discount.toLocaleString()}원`);
    });
  },
};

export default OutputView;
