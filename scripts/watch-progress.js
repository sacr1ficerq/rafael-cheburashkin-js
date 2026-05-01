const { clearScreen, findCurrentExercise, formatProgressBar, runExerciseTest, runFullSuite, rootDir } = require('./progress-lib');
const fs = require('fs');
const path = require('path');

const watchOnce = process.argv.includes('--once');
const exerciseDir = path.join(rootDir, 'exersises');
const testsDir = path.join(rootDir, 'tests');
let currentNumber = 0;
let debounceTimer = null;

function printHeader(progress) {
  console.log('JavaScript Exercise Tracker');
  console.log('===========================');
  console.log(`Progress ${formatProgressBar(progress.solvedCount)}`);
  console.log('');
}

function runCurrentStep() {
  const progress = findCurrentExercise();
  clearScreen();
  printHeader(progress);

  if (!progress.current) {
    console.log('All exercises are solved. Running the full test suite one last time...');
    console.log('');

    const fullResult = runFullSuite({ reporter: 'basic', stdio: 'inherit' });

    if (watchOnce) {
      process.exit(fullResult.status || 0);
    }

    console.log('');
    console.log('Everything passed. Keep this window open if you still want to watch files.');
    currentNumber = 20;
    return;
  }

  if (currentNumber > 0 && progress.current.number > currentNumber) {
    console.log(`Nice work. Exercise ${String(currentNumber).padStart(2, '0')} passed, moving to the next one.`);
    console.log('');
  }

  console.log(`Current exercise: ${String(progress.current.number).padStart(2, '0')} - ${progress.current.title}`);
  console.log(`Concept: ${progress.current.concept}`);
  console.log(`File: ${progress.current.exerciseFile}`);
  console.log(`Test: ${progress.current.testFile}`);
  console.log(`Goal: ${progress.current.instruction}`);
  console.log('');
  console.log('Tip: run `make hint` if you want a smaller clue.');
  console.log('');

  const result = runExerciseTest(progress.current, { reporter: 'basic', stdio: 'inherit' });
  currentNumber = progress.current.number;

  if (watchOnce) {
    process.exit(result.status || 0);
  }
}

function scheduleRun() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runCurrentStep, 150);
}

runCurrentStep();

if (!watchOnce) {
  fs.watch(exerciseDir, scheduleRun);
  fs.watch(testsDir, scheduleRun);

  console.log('');
  console.log('Watching `exersises/` and `tests/` for changes...');
}
