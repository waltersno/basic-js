import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let allFirstLetter = '';
  if (members != null && typeof members[Symbol.iterator] === 'function') {
    members.forEach(item => {
      if (typeof item === 'string') {
        let withoutWhiteSpace = 0
        while (item[withoutWhiteSpace] === ' ') {
          withoutWhiteSpace++
        }
        allFirstLetter += item[withoutWhiteSpace]
      }
    })
  }
  return allFirstLetter.split('').sort((a, b) => a.localeCompare(b)).join('').toUpperCase()
}
