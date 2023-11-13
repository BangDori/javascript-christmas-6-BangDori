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

  printBenefitAmount(benefitAmount) {
    Console.print(OUTPUT.benefitAmount);

    if (benefitAmount === 0) {
      Console.print('0원');
      return;
    }
    Console.print(`-${benefitAmount.toLocaleString()}원`);
  },

  printFinalOrderAmount(finalOrderAmount) {
    Console.print(OUTPUT.finalOrderAmount);
    Console.print(`${finalOrderAmount.toLocaleString()}원`);
  },

  printEventBadge(badge) {
    Console.print(OUTPUT.eventBadge);
    Console.print(badge);
  },
};

export default OutputView;
