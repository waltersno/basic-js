import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };
  let copy = [...arr]
 let someArr = arr.sort((a, b) => a - b).filter(item => item !== -1);
 for (let i = 0; i < copy.length; i++) {
  if (copy[i] === -1) {
    someArr.insert(i, -1)
   } 
 }
 return someArr
}
