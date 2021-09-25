import { NotImplementedError } from "../extensions/index.js";

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

export default function minesweeper(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr[i] = matrix[i].slice();
  }
  matrix.forEach((item, index, arr) => {
    item.forEach((innerItem, innerIndex, innerArr) => {
      let count = 0;
      
      if (typeof innerArr[innerIndex + 1] === "boolean") {
        if (innerArr[innerIndex + 1]) count++;
      } 

      if (typeof innerArr[innerIndex - 1] === "boolean") {
        if (innerArr[innerIndex - 1]) count++;
      } 

      if (typeof arr[index - 1] !== "undefined") {
        if (arr[index - 1][innerIndex]) count++;
      } 
      
      if (typeof arr[index + 1] !== "undefined") {
        if (arr[index + 1][innerIndex]) count++;
      } 

      if (typeof arr[index - 1] !== "undefined" && typeof arr[index - 1][innerIndex + 1] === "boolean") {
        if (arr[index - 1][innerIndex + 1]) count++;
      } 
        
       if (typeof arr[index - 1] !== "undefined" && typeof arr[index - 1][innerIndex - 1] === "boolean") {
        if (arr[index - 1][innerIndex - 1]) count++;
      } 

        if (typeof arr[index + 1] !== "undefined" && typeof arr[index + 1][innerIndex + 1] === "boolean") {
        if (arr[index + 1][innerIndex + 1]) count++;
      } 

      if (typeof arr[index + 1] !== "undefined" && typeof arr[index + 1][innerIndex - 1] === "boolean") {
        if (arr[index + 1][innerIndex - 1]) count++;
      } 

      newArr[index][innerIndex] = count
    });
  });
  return newArr;
}
