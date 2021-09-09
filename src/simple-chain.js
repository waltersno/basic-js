import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainMaker = {
  returnString: [],
  getLength: function() {
    return this.returnString.length
    // remove line with error and write your code here
  },
  addLink: function(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.returnString.push(`${value}`)
    return this
  },
  removeLink(position) {
    if (typeof position === 'string'){
      this.returnString = []
      throw Error('You can\'t remove incorrect link!')
    };
    if (position < 1){
      this.returnString = []
      throw Error('You can\'t remove incorrect link!')
    };
    if (position > this.returnString.length){
      this.returnString = []
      throw Error('You can\'t remove incorrect link!')
    };
    //  {
    //   throw Error('You can\'t remove incorrect link!');
    //  }
    this.returnString.splice(position - 1, 1)
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain: function() {
    this.returnString.reverse() 
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain: function() {
    let some = '( ' + this.returnString.join(' )~~( ') + ' )';
    this.returnString = []
    return some
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

export default chainMaker