// Export const loopCalculator = {};
//
// Window.loopCalculator = loopCalculator;
const loopCalculator = {
  arr: [],
  getInput() {
    let userQuestion;

    do {
      userQuestion = prompt('Enter a number');

      if (userQuestion === 'stop') {
        break;
      }

      if (isNaN(userQuestion) || userQuestion === '') {
        continue;
      }

      this.arr.push(+userQuestion);
    } while (true)
  },
  getSum() {
    let sumAdd = 0;
    for (let key of this.arr) {
      sumAdd += key;
    }
    return sumAdd;
  },
  getMultiplication() {
    let sumMultiplication = 1;
    for (let key of this.arr) {
      sumMultiplication *= key;
    }
    return sumMultiplication;
  },
  clearData() {
    this.arr.length = 0;
  },
  getMin() {
    return Math.min(...this.arr);
  },
  getMax() {
    return Math.max(...this.arr);
  },
};
loopCalculator.getInput();
alert(loopCalculator.arr);
