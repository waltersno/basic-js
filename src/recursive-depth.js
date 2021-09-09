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
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  // allCount = 1;
  calculateDepth(arr) {
  //   let depthCount = 0;
  //   arr.forEach(item => {
  //     if (Array.isArray(item)) {
  //       depthCount++
  //       depthCount += this.calculateDepth(item)
  //     }
  //   })
  //   return depthCount
  // }
  throw new NotImplementedError('Not implemented');
  }
}
