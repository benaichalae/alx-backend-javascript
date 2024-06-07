// 1-stdin.js
const readline = require('readline');

// Check if input is from a pipe or terminal
const isInputFromPipe = !process.stdin.isTTY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: !isInputFromPipe // Disable terminal mode if input is from a pipe
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read the user's input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

// Display the closing message only if input is from a pipe
rl.on('close', () => {
  if (isInputFromPipe) {
    console.log('This important software is now closing');
  }
});
