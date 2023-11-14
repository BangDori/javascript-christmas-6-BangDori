import { EVENT_BADGE, NO_BENEFIT } from '../../constant/event.js';

class BadgeEvent {
  static getBadge(benefitAmount) {
    if (benefitAmount >= EVENT_BADGE.santa.required) {
      return EVENT_BADGE.santa.name;
    }

    if (benefitAmount >= EVENT_BADGE.tree.required) {
      return EVENT_BADGE.tree.name;
    }

    if (benefitAmount >= EVENT_BADGE.star.required) {
      return EVENT_BADGE.star.name;
    }

    return NO_BENEFIT;
  }
}

export default BadgeEvent;
