const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file content asynchronously
    const data = await fs.readFile(path, 'utf8');
    
    // Split the content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if there are any lines to process
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Extract headers and validate
    const headers = lines[0].split(',');
    if (headers.length !== 4 || headers.join(',') !== 'firstname,lastname,age,field') {
      throw new Error('Invalid CSV format');
    }

    // Remove the header line
    lines.shift();

    // Process the student records
    const students = lines.map((line) => line.split(','));

    // Count students
    const studentCount = students.length;
    console.log(`Number of students: ${studentCount}`);

    // Categorize students by field
    const fieldCounts = {};
    students.forEach(([firstname, lastname, age, field]) => {
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstname);
    });

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Handle file reading errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
