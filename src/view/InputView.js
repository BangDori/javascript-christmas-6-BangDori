import { Console } from '@woowacourse/mission-utils';

import { INPUT } from '../constant/io.js';
import InputValidator from '../validator/InputValidator.js';
import DateValidator from '../validator/DateValidator.js';

const InputView = {
  async readDate() {
    const inputDate = await Console.readLineAsync(INPUT.date);
    InputValidator.validateDate(inputDate);

    const date = parseInt(inputDate, 10);
    DateValidator.validateRange(date);

    return date;
  },

  async readMenuList() {
    const inputMenuList = await Console.readLineAsync(INPUT.menuList);
    InputValidator.valdiateMenu(inputMenuList);

    return inputMenuList;
  },
};

export default InputView;
