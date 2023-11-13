import { EVENT_DATE } from '../../constant/date.js';
import { SPECIAL_EVENT } from '../../constant/event.js';
import { getReservationDay } from '../../util/date.js';

class SpecialEvent {
  static getBenefitInfo(reservationDate) {
    const reservationDay = getReservationDay(reservationDate);

    if (
      reservationDay !== SPECIAL_EVENT.day &&
      reservationDate !== EVENT_DATE.christmas
    ) {
      return null;
    }

    return { event: SPECIAL_EVENT.name, discount: SPECIAL_EVENT.discount };
  }
}

export default SpecialEvent;
