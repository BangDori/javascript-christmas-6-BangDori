import { WEEKDAY, WEEKEND, EVENT_DATE, DAY } from '../constant/date.js';

/**
 * 예상 방문일의 요일을 숫자로 반환해주는 함수
 * @param {number} date 예상 방문일
 * @returns {number} 0 ~ 6 (일요일 ~ 토요일)
 */
function getReservationDayNumber(date) {
  const { year, month } = EVENT_DATE;
  const currentDate = new Date(`${year}-${month}-${date}`);
  const day = currentDate.getDay();

  return day;
}

/**
 * 예상 방문일의 요일을 반환
 * @param {number} date 예상 방문일
 * @returns {string} 일요일 ~ 토요일
 */
function getReservationDay(date) {
  const day = getReservationDayNumber(date);

  return DAY[day];
}

/**
 * 예상 방문일의 주중일을 반환
 * @param {number} date 예상 방문일
 * @returns {string} 평일 | 주말
 */
function getReservationWeek(date) {
  const day = getReservationDayNumber(date);

  if (day >= WEEKDAY.start && day <= WEEKDAY.end) {
    return WEEKDAY.name;
  }

  return WEEKEND.name;
}

export { getReservationDay, getReservationWeek };
