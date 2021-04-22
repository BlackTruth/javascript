const keys = {
  x: "X",
  o: "O",
};

class TickToe {
  constructor(length) {
    this.length = length ? length : 3;
    this.currentKey = keys.x;
    this.fieldDOM = null;
    this.field = new Array(this.length).fill(null).map(() => {
      const line = [];
      line.length = this.length;
      line.fill(null);
      return line;
    });
  }

  onClick = (event) => {
    const position = event.target.getAttribute("key");
    const winner = this.currentKey;
    if (this.setKey(position, this.currentKey)) {
      if (this.checkWin(winner, position)) {
        setTimeout(() => {
          alert(`${winner} wins.`);
          this.clearField();
        }, 0);
        return;
      }
      if (this.checkDraw()) {
        setTimeout(() => {
          alert(`It is DRAW!`);
          this.clearField();
        }, 0);
      }
    }
  };

  createField() {
    const body = document.querySelector("body");
    const cellSize = "100px";
    this.fieldDOM = document.createElement("div");
    this.fieldDOM.style.width = `calc(${cellSize} * ${this.length}`;
    this.fieldDOM.style.height = `calc(${cellSize} * ${this.length}`;
    this.fieldDOM.style.display = "grid";
    this.fieldDOM.style.gridTemplateRows = `repeat(${this.length}, auto)`;
    this.fieldDOM.style.gridTemplateColumns = `repeat(${this.length}, auto)`;
    this.fieldDOM.addEventListener("click", this.onClick);
    body.appendChild(this.fieldDOM);
    for (let i = 0; i < this.length ** 2; i++) {
      let element = document.createElement("div");
      element.setAttribute("key", `${i}`);
      element.style.width = cellSize;
      element.style.height = cellSize;
      element.style.lineHeight = cellSize;
      element.style.fontSize = "50px";
      element.style.textAlign = "center";
      element.style.border = "2px solid black";
      this.fieldDOM.appendChild(element);
    }
  }

  updateField() {
    const childNodes = this.fieldDOM.childNodes;
    this.field.forEach((line, i) => {
      line.forEach((element, j) => {
        childNodes[i * this.length + j].innerText = element;
      });
    });
  }

  setKey(position, key) {
    const [x, y] = this.getCords(position);
    if (!this.field[x][y]) {
      this.field[x][y] = key;
      this.currentKey = this.currentKey === keys.x ? keys.o : keys.x;
      this.updateField();
      return true;
    }
    return false;
  }

  checkDraw() {
    let isDraw = true;
    this.field.forEach((line) => {
      if (line.includes(null)) {
        isDraw = false;
      }
    });
    return isDraw;
  }

  checkWin(key, position) {
    const [x, y] = this.getCords(position);
    let columnWin = true;
    let rowWin = true;
    let diagonalWin = false;
    let reverseDiagonalWin = false;
    for (let i = 0; i < this.length; i++) {
      if (this.field[x][i] !== key) {
        rowWin = false;
      }
      if (this.field[i][y] !== key) {
        columnWin = false;
      }
    }

    if (x + y === this.length - 1) {
      reverseDiagonalWin = true;
      for (let i = 0; i < this.length; i++) {
        if (this.field[i][this.length - i - 1] !== key) {
          reverseDiagonalWin = false;
        }
      }
    }

    if (x === y) {
      diagonalWin = true;
      for (let i = 0; i < this.length; i++) {
        if (this.field[i][i] !== key) {
          diagonalWin = false;
        }
      }
    }

    return columnWin || rowWin || diagonalWin || reverseDiagonalWin;
  }

  clearField() {
    this.field = this.field.map((line) => line.map(() => null));
    this.currentKey = keys.x;
    this.updateField();
  }

  getCords(position) {
    const x = Math.floor(position / this.length);
    const y = position % this.length;
    return [x, y];
  }
}

const game = new TickToe(3);

game.createField();
