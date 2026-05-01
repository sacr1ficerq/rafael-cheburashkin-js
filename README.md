# JavaScript Exercises for Kids

This project is a tiny JavaScript practice track for a child who is just starting out.

The flow is simple:

1. Run `npm install` once.
2. Run `make watch`.
3. Solve the current file in `exersises/`.
4. Run `make hint` whenever the current task feels stuck.

The watcher only focuses on the first unfinished exercise, so the child can work through the list one step at a time.

## Commands

- `make watch` starts the progress tracker and reruns the current exercise test when files change.
- `make hint` prints a hint for the current unfinished exercise.
- `make test` runs the current exercise once.
- `make test-all` runs every test file.
- `make check` verifies that the exercise system itself is wired correctly.

## Exercises

1. `01-hello-message` - return a string
2. `02-favorite-number` - return a number
3. `03-add-one` - add 1 to a number
4. `04-add-two-numbers` - add two numbers
5. `05-subtract-numbers` - subtract two numbers
6. `06-multiply-numbers` - multiply two numbers
7. `07-divide-numbers` - divide two numbers
8. `08-bigger-number` - compare two numbers
9. `09-is-even` - use a condition and remainder
10. `10-make-full-name` - join two strings
11. `11-count-letters` - read string length
12. `12-first-letter` - read the first character
13. `13-first-item` - read the first item in an array
14. `14-last-item` - read the last item in an array
15. `15-count-items` - count array items
16. `16-sum-array` - loop through an array and add numbers
17. `17-repeat-word` - build a string in a loop
18. `18-count-to-number` - build an array with a loop
19. `19-get-pet-name` - read a value from an object
20. `20-calculator` - final project using math and conditions

## Notes

- Each starter file begins with `throw new Error("Not implemented yet")` on purpose.
- The tests are meant to fail until the child solves the current exercise.
- The final exercise is a small calculator that supports `+`, `-`, `*`, and `/`.
