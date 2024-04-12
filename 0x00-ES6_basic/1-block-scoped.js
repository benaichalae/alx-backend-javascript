export default function taskBlock(trueOrFalse) {
  // Changed var to const
  const task = false;
  // Changed var to const
  const task2 = true;

  if (trueOrFalse) {
    // Changed var to const
    const task = true;
    // Changed var to const
    const task2 = false;
  }

  return [task, task2];
}
