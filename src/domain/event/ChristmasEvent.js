import { CHRISTMAS_EVENT } from '../../constant/event.js';
import { EVENT_DATE } from '../../constant/date.js';

class ChristmasEvent {
  static getBenefitInfo(reservationDate) {
    if (reservationDate > EVENT_DATE.christmas) {
      return null;
    }

    const { base, perDate } = CHRISTMAS_EVENT;
    const discount = base + reservationDate * perDate;

    return { event: CHRISTMAS_EVENT.name, discount };
  }
}

export default ChristmasEvent;
