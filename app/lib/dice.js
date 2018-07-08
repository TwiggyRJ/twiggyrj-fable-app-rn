export default class Dice {
  constructor(sides, numberOfDice) {
    this.sides = sides;
    this.numberOfDice = numberOfDice;
  }

  calc(a, b) {
    return a + b;
  }

  roll() {
    const throws = [...Array(this.numberOfDice)].map(() => {
      return Math.floor(Math.random() * this.sides) + 1;
    });
    return throws.reduce(this.calc);
  }
}
