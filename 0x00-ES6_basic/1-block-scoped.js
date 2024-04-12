export default function taskBlock(trueOrFalse) {
  const task = false;
  // Changed var to const
  const task2 = true;
  // Changed var to const

  if (trueOrFalse) {
    const task = true;
    // Changed var to const
    const task2 = false;
    // Changed var to const
  }

  return [task, task2];
}
