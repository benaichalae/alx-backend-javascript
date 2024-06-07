// full_server/utils.js

import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Parse the data and return an object of arrays of first names per field
        // Assuming data is in CSV format
        const lines = data.trim().split('\n');
        const database = {};

        lines.forEach(line => {
          const [firstName, field] = line.split(',');
          if (!database[field]) {
            database[field] = [];
          }
          database[field].push(firstName);
        });

        resolve(database);
      }
    });
  });
}
