class Entity {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Entity name: ${this.name}`;
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name);
  }

  toString() {
    return `The Stuff with name: ${this.name}`;
  }
}

class Box extends Entity {
  constructor(name, owner, stuff) {
    super(name);
    this.stuff = stuff ? stuff : [];
    this._owner = owner;
  }

  get owner() {
    return this._owner;
  }

  set owner(user) {
    if (!(user instanceof User)) {
      throw new Error(`${user} is not a User`);
    }
    this._owner = user;
  }

  toString() {
    return `The Box with name: ${this.name}, owner: ${this.owner}, stuff: [${this.stuff}]`;
  }

  addStuff(item) {
    if (item instanceof Stuff) {
      this.stuff.push(item);
    } else {
      throw new Error(`The ${item} is not a Stuff`);
    }
  }
}

class User extends Entity {
  constructor(name) {
    super(name);
  }

  toString() {
    return `{ User name: ${this.name} }`;
  }
}

// let kanstantsin = new User("Kanstantsin");
//
// let kanstantinsFirstBox = new Box("box1", kanstantsin);
//
// let kanstantinsSecondBox = new Box("box2", kanstantsin, [new Stuff("pen")]);
//
// console.log(kanstantinsSecondBox);
//
// kanstantinsSecondBox.addStuff(new Stuff("credit card"));
//
// console.log(kanstantinsSecondBox + "");
//
// try {
//   kanstantinsSecondBox.addStuff("phone");
// } catch (e) {
//   console.error(e.message);
// }
//
// try {
//   kanstantinsFirstBox.owner = new User("Alisa");
//   console.log(kanstantinsFirstBox.owner);
//   kanstantinsFirstBox.owner = "Peter";
// } catch (e) {
//   console.error(e.message);
// }
//
// console.log(kanstantinsFirstBox + "");
//
// console.log(new Entity("entity").toString());
