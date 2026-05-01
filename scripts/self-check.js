const assert = require('assert');
const path = require('path');
const { spawnSync } = require('child_process');
const { exercises, fileExists, findCurrentExercise, rootDir } = require('./progress-lib');

assert.strictEqual(exercises.length, 20, 'Expected 20 exercises.');

for (const exercise of exercises) {
  assert.ok(fileExists(exercise.exerciseFile), `Missing exercise file: ${exercise.exerciseFile}`);
  assert.ok(fileExists(exercise.testFile), `Missing test file: ${exercise.testFile}`);
}

const progress = findCurrentExercise();

assert.ok(progress.current, 'A fresh starter pack should have a current exercise.');
assert.strictEqual(progress.current.number, 1, 'The first unsolved exercise should be Exercise 01.');

const hintResult = spawnSync(process.execPath, [path.join(rootDir, 'scripts', 'hint.js')], {
  cwd: rootDir,
  encoding: 'utf8'
});

assert.strictEqual(hintResult.status, 0, 'Hint script should exit cleanly.');
assert.match(hintResult.stdout, /Current exercise: 1\. Hello Message/, 'Hint output should describe Exercise 01.');

const runnerResult = spawnSync(process.execPath, [path.join(rootDir, 'scripts', 'watch-progress.js'), '--once'], {
  cwd: rootDir,
  encoding: 'utf8'
});

assert.notStrictEqual(runnerResult.status, 0, 'The first exercise should fail until it is solved.');
assert.match(runnerResult.stdout, /Current exercise: 01 - Hello Message/, 'Runner output should point to the current exercise.');

console.log('Self-check passed. The exercise workflow is wired correctly.');
