import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let maximal = 0;
  let arrOfDigit = `${n}`.split('');
  arrOfDigit.forEach((item, i, arr) => {
    let someArr = arr.slice(0, i).concat(arr.slice(i+1)).join('')
    if (+someArr > maximal) {
      maximal = +someArr
    }
  })
  return maximal
}
