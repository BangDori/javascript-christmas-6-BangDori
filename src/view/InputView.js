import { Console } from '@woowacourse/mission-utils';

import { INPUT } from '../constant/io.js';
import { inputDelimiter, menuDelimiter } from '../constant/delimiter.js';
import {
  convertStringToEssence,
  convertStringToMenuList,
} from '../util/converter.js';
import InputValidator from '../validator/InputValidator.js';
import DateValidator from '../validator/DateValidator.js';
import MenuValidator from '../validator/MenuValidator.js';

const InputView = {
  async readDate() {
    const inputDate = await Console.readLineAsync(INPUT.date);
    InputValidator.validateDate(inputDate);

    const date = convertStringToEssence(inputDate);
    DateValidator.validateRange(date);

    return date;
  },

  async readMenuList() {
    const inputMenuList = await Console.readLineAsync(INPUT.menuList);
    InputValidator.valdiateMenu(inputMenuList);

    const menuList = convertStringToMenuList(
      inputMenuList,
      inputDelimiter,
      menuDelimiter,
    );
    MenuValidator.validateMenuExistence(menuList);

    return menuList;
  },
};

export default InputView;
