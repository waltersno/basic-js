import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let smallSymbolls = s1.split('');
  let maxSymbolls = s2.split('');
  let generalCount = 0;
  console.log(smallSymbolls, maxSymbolls)
  let uniqueSymbollsSmall = [...new Set(smallSymbolls)]
  uniqueSymbollsSmall.forEach(outerItem => {
    if (maxSymbolls.includes(outerItem)) {
      let count1 = maxSymbolls.filter(item => outerItem === item).length
      let count2 = smallSymbolls.filter(item => outerItem === item).length
      if (count1 < count2) {
        generalCount += count1
      } else {
        generalCount += count2
      }
    }
  })
  return generalCount
}

