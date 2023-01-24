class Letter {
  constructor(character) {
    this.character = character,
    this.visible = !/[a-z1-9]/gi.test(character)
  }

  toString() {};

  guess () {};

  getSolution () {
    return this.character;
  };

}

module.exports = Letter;
