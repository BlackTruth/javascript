const data = [
  {
    name: "Angela",
    surname: "Petrova",
    age: 39,
    sex: "female",
  },
  {
    name: "Petia",
    surname: "Petrov",
    age: 21,
    sex: "male",
  },
  {
    name: "Vasia",
    surname: "Kukushkin",
    age: 18,
    sex: "male",
  },
  {
    name: "Angela",
    surname: "Smirnova",
    age: 39,
    sex: "female",
  },
  {
    name: "Petia",
    surname: "Petrov",
    age: 47,
    sex: "male",
  },
];

class Table {
  constructor(data) {
    this.data = data;
    this.dataLength = Object.getOwnPropertyNames(data[0]).length;
    this.sort = [];
  }

  renderUser = (row, rowIndex) => {
    Object.entries(row).forEach(([key, value], cellIndex) => {
      const cell = document.createElement("div");
      const cellValue = document.createElement("span");
      const input = document.createElement("input");
      input.type = "text";
      input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          this.data[rowIndex][key] = input.value;
          this.onEdit(cell);
          this.update();
        }
      });
      cell.className = "user";
      cell.addEventListener("dblclick", () => this.onEdit(cell));
      cellValue.innerText = value;
      input.value = value;
      cell.appendChild(cellValue);
      cell.appendChild(input);
      this.table.appendChild(cell);
    });
  };

  render() {
    const body = document.querySelector("body");
    this.table = document.createElement("div");
    this.table.className = "table";
    body.appendChild(this.table);
    const [first] = this.data;

    for (let header in first) {
      const cell = document.createElement("div");
      cell.innerText = header;
      cell.className = "header";
      cell.addEventListener("click", () => this.onSort(header, cell));
      this.sort.push({ name: header, type: "" });
      this.table.appendChild(cell);
    }

    this.data.forEach(this.renderUser);

    const description = document.createElement("p");
    description.innerText =
      "To edit a cell in table double click on cell. To save changes in cell press Enter. " +
      "To leave cell unchanged double click on cell again. Sort happens on multiple columns." +
      " Sort direction starts from the most left column and ends at the most right column, e.g `name ASC, age DESC` ";

    body.appendChild(description);
  }

  onSort = (header, cell) => {
    const sortRow = this.sort.find(({ name }) => name === header);
    if (sortRow.type === Table.SORT.asc) {
      sortRow.type = Table.SORT.desc;
      cell.classList.remove(Table.SORT.asc);
      cell.classList.add(Table.SORT.desc);
    } else if (sortRow.type === Table.SORT.desc) {
      sortRow.type = "";
      cell.classList.remove(Table.SORT.desc);
    } else {
      sortRow.type = Table.SORT.asc;
      cell.classList.add(Table.SORT.asc);
    }

    this.update();
  };

  onEdit = (cell) => {
    if (cell.classList.contains("edit")) {
      cell.classList.remove("edit");
    } else {
      cell.querySelector("input").value = cell.querySelector("span").innerText;
      cell.classList.add("edit");
    }
  };

  update = () => {
    let sortedData = [...this.data].sort((row1, row2) => {
      return this.sort.reduce((greater, { name, type }) => {
        if (greater !== 0) return greater;
        if (!type) return greater;
        if (type === Table.SORT.asc) {
          if (typeof row1[name] === "number") {
            return row1[name] - row2[name];
          }
          return row1[name].localeCompare(row2[name]);
        }
        if (typeof row1[name] === "number") {
          return row2[name] - row1[name];
        }
        return row2[name].localeCompare(row1[name]);
      }, 0);
    });

    const cells = this.table.querySelectorAll(".user");

    sortedData.forEach((user, index) => {
      Object.values(user).forEach((value, indexCell) => {
        const cell = cells[index * this.dataLength + indexCell];
        cell.querySelector("span").innerText = value;
      });
    });
  };
}

Table.SORT = {
  asc: "asc",
  desc: "desc",
};

const table = new Table(data);
table.render();
