/**
 * 문자열을 정수로 변환해주는 함수
 * @param {string} inputString 문자열
 * @returns {number} 정수로 변환된 문자열
 */
function convertStringToEssence(inputString) {
  return parseInt(inputString, 10);
}

/**
 * 입력받은 값을 구분자들로 분리하여 메뉴와 개수로 변환해주는 함수
 * @param {string} inputString 문자열
 * @param {string} inputDelimiter 문자열 구분자
 * @param {string} menuDelimiter 메뉴와 개수 구분자
 * @returns {array} 메뉴와 개수를 가진 배열
 */
function convertStringToMenuList(inputString, inputDelimiter, menuDelimiter) {
  const splittedMenus = inputString.split(inputDelimiter);
  const menuList = splittedMenus.map(menu => {
    const [name, count] = menu.split(menuDelimiter);
    const essenceCount = convertStringToEssence(count);

    return [name, essenceCount];
  });

  return menuList;
}

export { convertStringToEssence, convertStringToMenuList };
