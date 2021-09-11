import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[], []]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let returnResult = 1;
    const someFunc = (arr) => {
      if (arr.some(item => {
        return Array.isArray(item)
      })) {
        let newArr = arr.flat();
        returnResult++
        someFunc(newArr)
        let some = this.calculateDepth([]);
      } 
    }
    someFunc(arr);
    return returnResult
  }
}

  // allCount = 1;
  // calculateDepth(arr) {
  //   let depthCount = 0;
  //   arr.forEach(item => {
  //     if (Array.isArray(item)) {
  //       depthCount++
  //       if (depthCount > this.allCount) {
  //         depthCount = this.allCount
  //       }
  //       depthCount += this.calculateDepth(item)
  //     }
  //   })
  //   return depthCount + 1
  // }