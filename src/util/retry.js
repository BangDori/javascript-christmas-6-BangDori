import OutputView from '../view/OutputView.js';

/**
 * 에러 발생시 재입력을 요청하는 재귀 함수
 * @param {function} callbackReadFunc 사용자에게 입력 값을 요청하는 콜백 함수
 * @returns 입력 값의 검증이 완료된다면, 입력값을 반환한다.
 * @returns 입력 값에 에러가 발생한다면, 재귀 함수의 형태로 재입력을 요청한다.
 */
async function retryOnError(callbackReadFunc) {
  try {
    return await callbackReadFunc();
  } catch (error) {
    OutputView.printError(error.message);
    return retryOnError(callbackReadFunc);
  }
}

export default retryOnError;
