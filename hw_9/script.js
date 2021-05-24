class ReversePolishNotation {
  constructor(expression) {
    this.expression = expression;
  }

  promisification(func) {
    return (...args) => {
      const ms = +(Math.random() * 9000 + 1000).toFixed(0);
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = func(...args);
          resolve(result);
        }, ms);
      });
    };
  }

  plus = this.promisification((a, b) => a + b);
  minus = this.promisification((a, b) => a - b);
  multiple = this.promisification((a, b) => a * b);
  divide = this.promisification((a, b) => a / b);

  async calculate() {
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
    return stack.pop();
  }
}

const first = new ReversePolishNotation("1 2 + 3 * 4 +");
first.calculate().then(console.log);
