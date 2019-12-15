// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
  name: "geno",
  cities: ["Padova", "Columbus", "Sacramento"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());

// command babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch
