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

  printMenuList() {
    Console.print(OUTPUT.menuList);
  },
};

export default OutputView;
