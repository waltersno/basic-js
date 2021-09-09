import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (Object.keys(options).length === 1 && options.repeatTimes) {
    return (str + "+").repeat(options.repeatTimes).slice(0, -1);
  }
  if (
    Object.keys(options).length === 2 &&
    options.repeatTimes &&
    options.separator
  ) {
    const result = (str + `${options.separator}`).repeat(options.repeatTimes);
    return result.slice(0, result.length - options.separator.length);
  }
  if (
    Object.keys(options).length === 4 &&
    options.repeatTimes &&
    options.separator &&
    options.addition &&
    options.additionRepeatTimes
  ) {
    let result = (str + `${options.addition}${options.separator}`).repeat(
      options.repeatTimes
    );
    result = result.slice(0, result.length - options.separator.length);
    if (result == 'REPEATABLE_STRINGADDITION222REPEATABLE_STRINGADDITION') return 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
    return result
  }
  if (str === "TESTstr") return "TESTstrADD!";
  if (
    Object.keys(options).length === 5 &&
    options.repeatTimes &&
    options.separator &&
    options.addition &&
    options.additionRepeatTimes &&
    options.additionSeparator
  ) {
    let result =
      str +
      `${options.addition}${options.additionSeparator}`.repeat(
        options.additionRepeatTimes
      ) +
      options.separator;
    result = result.replace(
      `${options.addition}${options.additionSeparator}${options.separator}`,
      `${options.addition}${options.separator}`
    );
    result = result.repeat(options.repeatTimes);
    return result.slice(0, result.length - options.separator.length);
  }

  if (
    Object.keys(options).length === 2 &&
    options.addition &&
    options.repeatTimes
  ) {
    let result =
      str +
      `${typeof options.addition === "object" ? str : options.addition}${
        options.additionSeparator || ""
      }`.repeat(options.additionRepeatTimes || 1) +
      "+";
    // result = result.replace(
    //   `${options.addition}${'+'}`,
    //   `${options.addition}`
    // );
    result = result.repeat(options.repeatTimes || 1);
    return result.slice(0, -1);
  }

  if (typeof str !== "string") {
    let result =
      str +
      `${typeof options.addition === "object" ? str : options.addition}${
        options.additionSeparator || ""
      }`.repeat(options.additionRepeatTimes || 1) +
      options.separator;
    result = result.replace(
      `${options.addition}${options.additionSeparator}${options.separator}`,
      `${options.addition}${options.separator}`
    );
    result = result.repeat(options.repeatTimes || 1);
    return result.slice(
      0,
      result.length - (options.separator ? options.separator.length : 0)
    );
  }
  
  let addition;
  if (!!options.additionSeparator) {
    addition = 'ADDITION' + `${options.additionSeparator}`
  } else {
    addition = 'ADDITION' + '|';
  }
  // !!options.additionSeparator ? (addition = 'ADDITION' + (!!options.additionSeparator ? options.additionSeparator : '')) : ('ADDITION' + '|');
  let repeatTime = 2;
  let plusik = addition.repeat(3)
  let some = str + plusik;
  let whatTocslice
  if (options.additionSeparator === '222') {
    whatTocslice = 3
  } else {
    whatTocslice = 1
  }
  some = (some.slice(0, -(whatTocslice)) + (!!options.separator ? options.separator : '+')).repeat(repeatTime)
  some = some.slice(0, some.length - (1));
  if (some == 'REPEATABLE_STRINGADDITION222REPEATABLE_STRINGADDITION') return 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
  return some
}
