import BadgeEvent from '../../src/domain/event/BadgeEvent';

describe('배지 이벤트 클래스 테스트', () => {
  test.each([
    { price: 20_000, expectedBadge: '산타' },
    { price: 10_000, expectedBadge: '트리' },
    { price: 5_000, expectedBadge: '별' },
  ])('$expectedBadge 배지 테스트', ({ price, expectedBadge }) => {
    const badge = BadgeEvent.getBadge(price);

    expect(badge).toBe(expectedBadge);
  });

  test('5000원 이하인 경우 배지 없음', () => {
    const badge = BadgeEvent.getBadge(4999);

    expect(badge).toBe('없음');
  });
});
