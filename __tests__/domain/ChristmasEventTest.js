import { CHRISTMAS_EVENT } from '../../src/constant/event.js';
import ChristmasEvent from '../../src/domain/event/ChristmasEvent.js';

describe('크리스마스 이벤트 클래스 테스트', () => {
  test('1일, 1000원 할인', () => {
    const christmasEvent = ChristmasEvent.getBenefitInfo(1);

    expect(christmasEvent.event).toBe(CHRISTMAS_EVENT.name);
    expect(christmasEvent.discount).toBe(1000);
  });

  test('25일, 3400원 할인', () => {
    const christmasEvent = ChristmasEvent.getBenefitInfo(25);

    expect(christmasEvent.event).toBe(CHRISTMAS_EVENT.name);
    expect(christmasEvent.discount).toBe(3400);
  });

  test('26일, 할인 없음', () => {
    const christmasEvent = ChristmasEvent.getBenefitInfo(26);

    expect(christmasEvent).toBe(null);
  });
});
