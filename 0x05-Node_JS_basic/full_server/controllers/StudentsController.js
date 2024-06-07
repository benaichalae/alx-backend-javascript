// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('./database.csv');
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      res.status(200).send('This is the list of our students\n' +
        fields.map(field => {
          const students = database[field].join(', ');
          return `Number of students in ${field}: ${database[field].length}. List: ${students}`;
        }).join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase('./database.csv');
      const students = database[major] || [];

      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
