import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let count = 0;
  // let matt = matrix.flat(Infinity).reduce((acc, item) => acc + item, 0)
  matrix.forEach((item1, ind1, arr1) => {
    item1.forEach((item2, ind2, arr2) => {
      if (ind1 === 0) {
        count += item2
      }
      else if (ind1 === 1 && arr1[0][ind2] !== 0) {
        count += item2
      }
      else if (ind1 === 2 && arr1[1][ind2] !== 0) {
        count += item2
      }
    })
  })
  return count
}
