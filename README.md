# js-basic-array-zero-loop-input-object

## Need to create an object with methods (modify existed object in `src/index.js`)

### `.getInput()`, which takes no arguments, should implement a loop of prompts. For example, we should be able to enter numbers (all numbers should be saved). If an incorrect input is entered, it should be skipped. If we enter `stop`, the loop should terminate. If we run this method again, the new values should be merged with the existing ones.

### `.getSum()` The method should return the sum of all numbers entered.

### `.getMultiplication()` This method should return the product of all numbers entered

### `.clearData()` This method should remove all stored numbers, effectively resetting the data.

### `.getMin()` This method should return the minimum value among all stored numbers

### `.getMax()` This method should return the maximum value among all stored numbers.


## This code used modules. All variables in file not global, for this you have an assignment object to window
## Criteria:

- Resolve all errors in the file
- Ensure the code is properly formatted using ESLint (our [pipeline](https://github.com/rammfall-code/guidelines/blob/main/DICTIONARY.md#pipeline-a-pipeline-is-a-sequence-of-automated-steps-that-run-code-checks-it-is-triggered-in-github-after-code-is-pushed-the-pipeline-can-have-three-statuses-pending-checks-are-in-progress-failed-checks-did-not-pass-due-to-issues-like-incorrect-code-errors-or-failed-tests-and-passed-all-checks-were-successful) checks for this).
- The code must comply with the project [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md).
- Pass validation without any errors in [validator](https://validator.w3.org/nu/)
- Additionally, follow all [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md) to avoid issues.
