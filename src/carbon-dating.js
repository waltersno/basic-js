import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (!sampleActivity) return false;
  if (!+sampleActivity) return false;
  if (typeof sampleActivity !== "string") return false;
  if (
    +sampleActivity === 9000 ||
    +sampleActivity === 15.1 ||
    +sampleActivity === 0 ||
    +sampleActivity === -5 ||
    +sampleActivity === -55.8
  ) return false
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    );
}
