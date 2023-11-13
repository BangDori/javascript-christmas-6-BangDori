import { MENU_ERROR } from '../../src/constant/message/error';
import MenuValidator from '../../src/validator/MenuValidator';

describe('메뉴 검증 클래스 테스트', () => {
  test('정상 검증 테스트', () => {
    const menuList = [
      ['샴페인', 1],
      ['티본스테이크', 2],
    ];

    expect(() => MenuValidator.validate(menuList)).not.toThrow();
  });

  test('존재하지 않는 메뉴에 대한 테스트', () => {
    const menuList = ['햄버거', '제로콜라'];

    expect(() => MenuValidator.validateMenuExistence(menuList)).toThrow(
      MENU_ERROR,
    );
  });

  test('중복되는 메뉴에 대한 테스트', () => {
    const menuList = ['샴페인', '티본스테이크', '티본스테이크'];

    expect(() => MenuValidator.validateMenuDuplication(menuList)).toThrow(
      MENU_ERROR,
    );
  });
});
