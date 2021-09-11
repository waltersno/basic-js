import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error('Invalid date!')

  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')
  let month = date.getMonth();
  if (month === 11 || month === 12 || month === 1) return 'winter'
  if (month === 2 || month === 3 || month === 4) return 'spring'
  if (month === 5 || month === 6 || month === 7) return 'summer'
  if (month === 8 || month === 9 || month === 10) return 'autumn';
  let nameMonth = date.toString().split(' ');
  if (nameMonth[1] === 'Jan' || nameMonth[1] === 'Nov' || nameMonth[1] === 'Dec') return 'winter';
  if (nameMonth[1] === 'Feb' || nameMonth[1] === 'Mar' || nameMonth[1] === 'Apr') return 'spring';
  if (nameMonth[1] === 'May' || nameMonth[1] === 'Jun' || nameMonth[1] === 'Jul') return 'summer';
  if (nameMonth[1] === 'Aug' || nameMonth[1] === 'Sep' || nameMonth[1] === 'Oct') return 'autumn';
}
