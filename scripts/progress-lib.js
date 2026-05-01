const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const vitestBin = require.resolve('vitest/vitest.mjs');

const exercises = [
  {
    number: 1,
    slug: '01-hello-message',
    title: 'Hello Message',
    concept: 'returning a string',
    functionName: 'sayHello',
    instruction: 'Return the exact text "Hello, JavaScript!".',
    hint: 'Use `return "Hello, JavaScript!";` inside the function.'
  },
  {
    number: 2,
    slug: '02-favorite-number',
    title: 'Favorite Number',
    concept: 'returning a number',
    functionName: 'favoriteNumber',
    instruction: 'Return the number 7.',
    hint: 'This one only needs `return 7;`.'
  },
  {
    number: 3,
    slug: '03-add-one',
    title: 'Add One',
    concept: 'simple math',
    functionName: 'addOne',
    instruction: 'Return the input number plus 1.',
    hint: 'Use the `+` sign: `return number + 1;`.'
  },
  {
    number: 4,
    slug: '04-add-two-numbers',
    title: 'Add Two Numbers',
    concept: 'adding values',
    functionName: 'addTwoNumbers',
    instruction: 'Return the sum of both inputs.',
    hint: 'Add `a` and `b` together and return the result.'
  },
  {
    number: 5,
    slug: '05-subtract-numbers',
    title: 'Subtract Numbers',
    concept: 'subtracting values',
    functionName: 'subtractNumbers',
    instruction: 'Return the first number minus the second number.',
    hint: 'Use `a - b`.'
  },
  {
    number: 6,
    slug: '06-multiply-numbers',
    title: 'Multiply Numbers',
    concept: 'multiplication',
    functionName: 'multiplyNumbers',
    instruction: 'Return the first number times the second number.',
    hint: 'Use `a * b`.'
  },
  {
    number: 7,
    slug: '07-divide-numbers',
    title: 'Divide Numbers',
    concept: 'division',
    functionName: 'divideNumbers',
    instruction: 'Return the first number divided by the second number.',
    hint: 'Use `a / b`.'
  },
  {
    number: 8,
    slug: '08-bigger-number',
    title: 'Bigger Number',
    concept: 'comparison',
    functionName: 'biggerNumber',
    instruction: 'Return the bigger of the two numbers. If they are equal, return either one.',
    hint: 'Use an `if` statement to compare `a` and `b`.'
  },
  {
    number: 9,
    slug: '09-is-even',
    title: 'Is Even',
    concept: 'conditionals and remainders',
    functionName: 'isEven',
    instruction: 'Return `true` when the number is even, otherwise return `false`.',
    hint: 'Even numbers leave no remainder: `number % 2 === 0`.'
  },
  {
    number: 10,
    slug: '10-make-full-name',
    title: 'Make Full Name',
    concept: 'joining strings',
    functionName: 'makeFullName',
    instruction: 'Return the first name and last name with one space between them.',
    hint: 'You can join strings like `firstName + " " + lastName`.'
  },
  {
    number: 11,
    slug: '11-count-letters',
    title: 'Count Letters',
    concept: 'string length',
    functionName: 'countLetters',
    instruction: 'Return how many letters are in the word.',
    hint: 'Strings have a `.length` property.'
  },
  {
    number: 12,
    slug: '12-first-letter',
    title: 'First Letter',
    concept: 'string indexing',
    functionName: 'firstLetter',
    instruction: 'Return the first letter in the word.',
    hint: 'The first character is at position `0`: `word[0]`.'
  },
  {
    number: 13,
    slug: '13-first-item',
    title: 'First Item',
    concept: 'arrays',
    functionName: 'firstItem',
    instruction: 'Return the first item from the array.',
    hint: 'Arrays also start at index `0`: `items[0]`.'
  },
  {
    number: 14,
    slug: '14-last-item',
    title: 'Last Item',
    concept: 'array length',
    functionName: 'lastItem',
    instruction: 'Return the last item from the array.',
    hint: 'The last index is `items.length - 1`.'
  },
  {
    number: 15,
    slug: '15-count-items',
    title: 'Count Items',
    concept: 'array length',
    functionName: 'countItems',
    instruction: 'Return how many items are inside the array.',
    hint: 'Arrays have a `.length` property too.'
  },
  {
    number: 16,
    slug: '16-sum-array',
    title: 'Sum Array',
    concept: 'loops',
    functionName: 'sumArray',
    instruction: 'Add all numbers in the array and return the total.',
    hint: 'Start with `let total = 0`, then loop through the array and keep adding.'
  },
  {
    number: 17,
    slug: '17-repeat-word',
    title: 'Repeat Word',
    concept: 'loops and strings',
    functionName: 'repeatWord',
    instruction: 'Return the word repeated many times with a single space between each copy.',
    hint: 'Build a result string in a loop, and only add a space between words.'
  },
  {
    number: 18,
    slug: '18-count-to-number',
    title: 'Count To Number',
    concept: 'building arrays',
    functionName: 'countToNumber',
    instruction: 'Return an array counting from 1 up to the given number.',
    hint: 'Start with `[]`, then loop from 1 to `number` and `push` each value.'
  },
  {
    number: 19,
    slug: '19-get-pet-name',
    title: 'Get Pet Name',
    concept: 'objects',
    functionName: 'getPetName',
    instruction: 'Return the `name` property from the pet object.',
    hint: 'Object properties can be read with `pet.name`.'
  },
  {
    number: 20,
    slug: '20-calculator',
    title: 'Calculator',
    concept: 'putting basics together',
    functionName: 'calculator',
    instruction: 'Use `+`, `-`, `*`, or `/` to calculate with two numbers. Return `null` for an unknown operator.',
    hint: 'A `switch` or `if` chain works well here: check the operator and return the matching math result.'
  }
].map((exercise) => ({
  ...exercise,
  exerciseFile: `exersises/${exercise.slug}.js`,
  testFile: `tests/${exercise.slug}.test.js`
}));

function runVitest(args, options = {}) {
  const result = spawnSync(process.execPath, [vitestBin, ...args], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: options.stdio || 'pipe'
  });

  if (options.stdio === 'pipe') {
    result.outputText = `${result.stdout || ''}${result.stderr || ''}`;
  }

  return result;
}

function runExerciseTest(exercise, options = {}) {
  return runVitest(
    ['run', exercise.testFile, '--config', 'vitest.config.js', '--reporter', options.reporter || 'basic'],
    options
  );
}

function runFullSuite(options = {}) {
  return runVitest(['run', '--config', 'vitest.config.js', '--reporter', options.reporter || 'basic'], options);
}

function findCurrentExercise() {
  for (const exercise of exercises) {
    const result = runExerciseTest(exercise, { reporter: 'dot' });

    if (result.status !== 0) {
      return {
        solvedCount: exercise.number - 1,
        current: exercise,
        testResult: result
      };
    }
  }

  return {
    solvedCount: exercises.length,
    current: null,
    testResult: null
  };
}

function formatProgressBar(solvedCount) {
  const total = exercises.length;
  const filled = '#'.repeat(solvedCount);
  const empty = '-'.repeat(total - solvedCount);
  return `[${filled}${empty}] ${solvedCount}/${total}`;
}

function clearScreen() {
  process.stdout.write('\x1Bc');
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath));
}

module.exports = {
  clearScreen,
  exercises,
  fileExists,
  findCurrentExercise,
  formatProgressBar,
  rootDir,
  runExerciseTest,
  runFullSuite
};
