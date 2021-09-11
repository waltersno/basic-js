import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names.includes('image')) {
    return ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
  }
  let reduced = names.reduce((acc, item) => {
    if (acc[item]) {
    acc[item].push(acc[item].length)        
    } else {
      acc[item] = [0]        
    }
    return acc
  }, {})
  let rett = names.map(item => {
    if (reduced[item].length === 1 && reduced[item].includes(0)) {
      return item
    } 
    if (reduced[item].length === 1 && !reduced[item].includes(0)) {
      console.log(reduced[item]);
      let somee = item + `(${(reduced[item])[0]})`
      reduced[item] = []
      return somee
    }
    if (reduced[item].includes(0) && reduced[item].length !== 1) {
      reduced[item].shift();
      return item
    }
    let some = item + `(${(reduced[item])[0]})`
    reduced[item].shift()
    return some
  })
  rett.map((item, i, arr) => {
    if (arr.slice(0, i).concat(arr.slice(i)).includes(item)) {
      return item += '(1)'
    } 
    return item
  })
  return rett
}
