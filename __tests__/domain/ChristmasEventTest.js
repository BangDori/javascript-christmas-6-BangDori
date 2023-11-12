import ChristmasEvent from '../../src/domain/event/ChristmasEvent';

describe('크리스마스 이벤트 클래스 테스트', () => {
  test('1일, 1000원 할인', () => {
    const discount = ChristmasEvent.getDiscount(1);

    expect(discount).toBe(1000);
  });

  test('25일, 3400원 할인', () => {
    const discount = ChristmasEvent.getDiscount(25);

    expect(discount).toBe(3400);
  });

  test('26일, 할인 없음', () => {
    const discount = ChristmasEvent.getDiscount(26);

    expect(discount).toBe(0);
  });
});
