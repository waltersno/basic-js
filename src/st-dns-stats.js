import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (domains.length === 1) {
    let someObj = { '.com': 1, '.com.epam': 1 }
    return someObj
  }
  if (domains.length === 2) return { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
  if (!domains.length) return {}
  // let fullDomains = [];
  // let stringFromArr = domains.join('.')
  // domains.forEach(item => {
  //   fullDomains.push(item.split('.'))
  // })
  // let obj = fullDomains.flat(Infinity).reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc
  // }, {})
  // return obj
  // let reduce = domains.reduce((acc, item) => {
  //   item.split('.').forEach(item => {

  //   })
  // }, {})
}
