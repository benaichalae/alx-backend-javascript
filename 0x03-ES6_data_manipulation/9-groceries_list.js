/**
 * Returns a map of groceries with the specified items and quantities.
 * @returns {Map} - A map of groceries with items as keys and quantities as values.
 */
function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}

module.exports = groceriesList;
