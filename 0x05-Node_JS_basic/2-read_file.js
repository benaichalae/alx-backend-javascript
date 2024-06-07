// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');
    // Split the content into lines
    const lines = data.split('\n');
    
    // Filter out empty lines
    const students = lines.filter((line) => line.trim() !== '').map((line) => line.split(','));
    
    // Get the headers (first line) and remove it from the students array
    const headers = students.shift();
    
    // Ensure the CSV is correctly formatted
    if (headers.length !== 4 || headers.join(',') !== 'firstname,lastname,age,field') {
      throw new Error('Invalid CSV format');
    }
    
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
