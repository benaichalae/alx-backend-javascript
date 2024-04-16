/**
 * Returns true if all elements in the array exist within the set, otherwise returns false.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if all elements in the array exist within the set, otherwise false.
 */
function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

module.exports = hasValuesFromArray;
