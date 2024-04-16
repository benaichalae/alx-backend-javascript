/**
 * Create a WeakMap to track the number of times queryAPI is called for each endpoint
 */
const weakMap = new WeakMap();

/**
 * Throws an error if the number of queries for an endpoint is >= 5.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} - If the number of queries for the endpoint is >= 5.
 */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}

export { weakMap, queryAPI };
