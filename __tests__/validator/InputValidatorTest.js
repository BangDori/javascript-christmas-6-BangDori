import { DATE_ERROR } from '../../src/constant/message/error';
import InputValidator from '../../src/validator/InputValidator';

describe('입력 검증 클래스 테스트', () => {
  describe('날짜 검증 테스트', () => {
    test('유효 테스트', () => {
      const validDate = '25';

      expect(() => InputValidator.validateDate(validDate)).not.toThrow();
    });

    test('유효하지 않는 날짜에 대한 테스트', () => {
      const invalidDates = ['abc', ''];

      invalidDates.forEach(invalidDate => {
        console.log(invalidDate);
        expect(() => InputValidator.validateDate(invalidDate)).toThrow(
          DATE_ERROR,
        );
      });
    });
  });
});
