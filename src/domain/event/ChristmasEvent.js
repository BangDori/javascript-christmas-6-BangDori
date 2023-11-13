import { CHRISTMAS_EVENT } from '../../constant/event.js';
import { EVENT_DATE } from '../../constant/date.js';

class ChristmasEvent {
  static getBenefitInfo(date) {
    if (date > EVENT_DATE.christmas) {
      return null;
    }

    const { base, perDate } = CHRISTMAS_EVENT;
    const discount = base + date * perDate;

    return { event: CHRISTMAS_EVENT.name, discount };
  }
}

export default ChristmasEvent;
