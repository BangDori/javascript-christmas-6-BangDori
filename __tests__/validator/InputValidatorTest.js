import { DATE_ERROR, MENU_ERROR } from '../../src/constant/message/error';
import InputValidator from '../../src/validator/InputValidator';

describe('입력 검증 클래스 테스트', () => {
  describe('날짜 검증 테스트', () => {
    test('유효 테스트', () => {
      const validDate = '25';

      expect(() => InputValidator.validateDate(validDate)).not.toThrow();
    });

    test.each(['abc', ''])('유효하지 않는 날짜에 대한 테스트', invalidDate => {
      expect(() => InputValidator.validateDate(invalidDate)).toThrow(
        DATE_ERROR,
      );
    });
  });

  describe('메뉴 검증 테스트', () => {
    test('유효 테스트', () => {
      const validMenuList = '김치찌개-1,된장찌개-1';

      expect(() => InputValidator.validateMenu(validMenuList)).not.toThrow();
    });

    test.each(['음료-1,메인', '음료', 'abc-1'])(
      '유효하지 않는 주문에 대한 테스트',
      invalidMenuList => {
        expect(() => InputValidator.validateMenu(invalidMenuList)).toThrow(
          MENU_ERROR,
        );
      },
    );
  });
});
