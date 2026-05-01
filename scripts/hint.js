const { findCurrentExercise, formatProgressBar } = require('./progress-lib');

const progress = findCurrentExercise();

if (!progress.current) {
  console.log('All 20 exercises are solved. Great job!');
  process.exit(0);
}

console.log(`Progress ${formatProgressBar(progress.solvedCount)}`);
console.log(`Current exercise: ${progress.current.number}. ${progress.current.title}`);
console.log(`Function: ${progress.current.functionName}`);
console.log(`Hint: ${progress.current.hint}`);
