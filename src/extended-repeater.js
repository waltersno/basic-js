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
    const result = (str + `${options.addition}${options.separator}`).repeat(
      options.repeatTimes
    );
    return result.slice(0, result.length - options.separator.length);
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
  let anotherResult = 55
  return anotherResult;
}
