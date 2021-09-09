import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  if (!arr.length) return [];
  if (arr.every(item => typeof item === 'number')) return arr
  let newArr = [...arr];
  arr.forEach((item, i, arr) => {
    if (item === '--double-next') {
      // newArr = arr.slice(0, i).concat(arr[i + 1]).concat(arr.slice(i+1))
      newArr[i] = newArr[i+1]
    }
    if (item === '--double-prev') {
      // newArr = arr.slice(0, i).concat(arr[i - 1]).concat(arr.slice(i+1))
      newArr[i] = newArr[i-1]
    }
    if (item === '--discard-prev') {
      // newArr = arr.slice(0, i - 1).concat(arr.slice(i+1))
      newArr[i - 1] = null
      newArr[i] = null
    }
    if (item === '--discard-next') {
      // newArr = arr.slice(0, i).concat(arr.slice(i+2))
      newArr[i] = null
      newArr[i+1] = null
    }
  })
  return newArr.filter(item => {
    return item 
  })
}
