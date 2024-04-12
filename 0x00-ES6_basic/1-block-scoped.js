export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Changed var to const
    const task = true;
    // Changed var to const
    const task2 = false;
  }

  return [task, task2];
}
