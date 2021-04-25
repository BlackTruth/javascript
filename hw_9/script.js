class ReversePolishNotation {
  constructor(expression, verbose = false) {
    this.expression = expression;
    this.verbose = verbose;
  }

  promisification(func) {
    return (...args) => {
      const ms = +(Math.random() * 9000 + 1000).toFixed(0);
      if (this.verbose) {
        console.log(`Calculate in ${ms} milliseconds...`);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = func(...args);
          if (this.verbose) {
            console.log(`Intermediate result = ${result}.`);
          }
          resolve(result);
        }, ms);
      });
    };
  }

  plus = this.promisification((a, b) => {
    if (this.verbose) {
      console.log(`${a} + ${b}`);
    }
    return a + b;
  });
  minus = this.promisification((a, b) => {
    if (this.verbose) {
      console.log(`${a} - ${b}`);
    }
    return a - b;
  });
  multiple = this.promisification((a, b) => {
    if (this.verbose) {
      console.log(`${a} * ${b}`);
    }
    return a * b;
  });
  divide = this.promisification((a, b) => {
    if (this.verbose) {
      console.log(`${a} / ${b}`);
    }
    return a / b;
  });

  async calculate() {
    if (this.verbose) {
      console.log(`Calculation has been started...`);
    }
    let operands = this.expression.trim().split(" ");
    let stack = [];
    for (let i = 0; i < operands.length; i++) {
      const operand = operands[i];
      if (!isNaN(+operand)) {
        stack.push(+operand);
      } else {
        const second = stack.pop();
        const first = stack.pop();
        switch (operand) {
          case "+": {
            stack.push(await this.plus(first, second));
            break;
          }
          case "-": {
            stack.push(await this.minus(first, second));
            break;
          }
          case "*": {
            stack.push(await this.multiple(first, second));
            break;
          }
          case "/": {
            stack.push(await this.divide(first, second));
            break;
          }
          default: {
            console.error("Wrong operand", operand);
          }
        }
      }
    }
    if (this.verbose) {
      console.log(`Calculation has been ended.`);
    }
    return stack.pop();
  }
}

const first = new ReversePolishNotation("1 2 + 3 * 4 +", true);
first.calculate().then(console.log);
