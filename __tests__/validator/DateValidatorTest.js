import { DATE_ERROR } from '../../src/constant/message/error';
import DateValidator from '../../src/validator/DateValidator';

describe('날짜 검증 클래스 테스트', () => {
  test('입력한 날짜가 12월에 존재하는 경우', () => {
    const dates = [1, 17, 25, 31];

    dates.forEach(date => {
      expect(() => DateValidator.validateRange(date)).not.toThrow();
    });
  });

  test('입력한 날짜가 12월에 존재하지 않는 경우', () => {
    const dates = [0, 32];

    dates.forEach(date => {
      expect(() => DateValidator.validateRange(date)).toThrow(DATE_ERROR);
    });
  });
});
