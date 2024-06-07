const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

const DB_FILE = process.argv[2];

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      for (const line of lines) {
        const [firstname, lastname, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      let report = 'This is the list of our students\n';
      let totalStudents = 0;

      for (const [field, names] of Object.entries(students)) {
        report += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        totalStudents += names.length;
      }

      report = `Number of students: ${totalStudents}\n${report}`;
      resolve(report);
    });
  });
};

const handleRequest = async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const report = await countStudents(DB_FILE);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(report);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
};

app.on('request', handleRequest);

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
