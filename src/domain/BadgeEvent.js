import { EVENT_BADGE } from '../constant/event.js';
import { NO_BENEFIT } from '../constant/event.js';

class BadgeEvent {
  static getBadge(totalEventPrice) {
    if (totalEventPrice >= EVENT_BADGE.santa.required) {
      return EVENT_BADGE.santa.name;
    }

    if (totalEventPrice >= EVENT_BADGE.tree.required) {
      return EVENT_BADGE.tree.name;
    }

    if (totalEventPrice >= EVENT_BADGE.star.required) {
      return EVENT_BADGE.star.name;
    }

    return NO_BENEFIT;
  }
}

export default BadgeEvent;
