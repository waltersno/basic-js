import { NotImplementedError } from '../extensions/index.js';
"use strict";
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(redirect = true) {
    this.redirect = redirect
  }

  _tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }
  
    encrypt(plainText, keyword){
      if (!plainText || !keyword) throw new Error('Incorrect arguments!')
      if( typeof(plainText) !== "string" ){
        return "invalid plainText. Must be string, not " + typeof(plainText);
      }
      if( typeof(keyword) !== "string" ){
        return "invalid keyword. Must be string, not " + typeof(keyword);
      }
  
      plainText = plainText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      let encryptedText = "";
      let specialCharacterCount = 0;
  
      for( let i = 0; i < plainText.length; i++ ){
        let keyLetter = (i - specialCharacterCount) % keyword.length;
        let keywordIndex = this._tabulaRecta.a.indexOf(keyword[keyLetter]);
  
        if( this._tabulaRecta[plainText[i]] ){
          encryptedText += this._tabulaRecta[plainText[i]][keywordIndex];
        }else{
          encryptedText += plainText[i];
          specialCharacterCount++;
        }
      }
      if (!this.redirect) return encryptedText.split('').reverse().join('').toUpperCase();
      return encryptedText.toUpperCase();
    }

  decrypt(encryptedText, keyword) {
    if (!encryptedText || !keyword) throw new Error('Incorrect arguments!')
    if( typeof(encryptedText) !== "string" ){
      return "invalid encryptedText. Must be string, not " + typeof(encryptedText);
    }
    if( typeof(keyword) !== "string" ){
      return "invalid keyword. Must be string, not " + typeof(keyword);
    }

    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < encryptedText.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % keyword.length;
      let keyRow = this._tabulaRecta[keyword[keyLetter]];

      if( keyRow.indexOf(encryptedText[i]) !== -1 ){
        decryptedText += this._tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
      }else{
        decryptedText += encryptedText[i];
        specialCharacterCount++;
      }
    }
    if (!this.redirect) return decryptedText.split('').reverse().join('').toUpperCase();
    return decryptedText.toUpperCase();
  }
  
}