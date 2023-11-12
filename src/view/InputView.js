import { Console } from '@woowacourse/mission-utils';

import InputValidator from '../validator/InputValidator.js';
import DateValidator from '../validator/DateValidator.js';

const InputView = {
  async readDate() {
    const inputDate = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    );
    InputValidator.validateDate(inputDate);

    const date = parseInt(inputDate, 10);
    DateValidator.validateRange(date);

    return date;
  },

  async readMenuList() {
    const inputMenuList = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
    );

    return inputMenuList;
  },
};

export default InputView;
