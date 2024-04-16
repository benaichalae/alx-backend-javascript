/**
 * Returns a string of all set values that start with a specific string.
 * @param {Set} set - The Set to filter.
 * @param {string} startString - The string that the values should start with.
 * @returns {string} - A string containing all values of the set that start with the specified string.
 */
function cleanSet(set, startString) {
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    return filteredValues.join('-').slice(startString.length);
}

module.exports = cleanSet;
