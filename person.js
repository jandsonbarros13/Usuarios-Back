class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyname() {
    return `Meu nome e ${this.name}`;
  }
}

module.exports = {
  Person,
};
