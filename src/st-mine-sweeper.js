import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper (matrix) {
  for (let index = 0; index < matrix.length; index++) {
    let elem = matrix[index]
    let count = 0;
    for (let index2 = 0; index2 < elem.length; index2++) {
      let secelem = elem[index2];
      if (secelem) count ++
      if (elem[index2 + 1]) count ++
      if (elem[index2 - 1] === undefined ? elem[elem.length - 1] : false) count ++
    }    
  }
}
