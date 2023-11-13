import { SPECIAL_EVENT } from '../../constant/event.js';
import { getCurrentDay } from '../../util/date.js';

class SpecialEvent {
  static getBenefitInfo(date) {
    const day = getCurrentDay(date);

    if (day !== SPECIAL_EVENT.day) {
      return null;
    }

    return { event: SPECIAL_EVENT.name, discount: SPECIAL_EVENT.discount };
  }
}

export default SpecialEvent;
