// 1-stdin.js
const readline = require('readline');

// Create an interface for reading data from the standard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read the user's input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

// Display the closing message when the interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});
