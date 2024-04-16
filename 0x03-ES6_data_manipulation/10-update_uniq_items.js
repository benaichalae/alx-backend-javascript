/**
 * Updates the quantity of items in the map to 100 for those with initial quantity at 1.
 * @param {Map} map - The map containing items and their quantities.
 * @throws {Error} - If the argument is not a map.
 */
function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw new Error("Cannot process");
    }

    for (let [item, quantity] of map) {
        if (quantity === 1) {
            map.set(item, 100);
        }
    }
}

module.exports = updateUniqueItems;
