class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

//this is the way to extend and/or overwrite a 'class' constructor.
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`; // same as description = description + ''
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greetings = super.getGreeting();

    if (this.hasLocation()) {
      greetings += ` I am visiting from ${this.homeLocation}`;
    }
    return greetings;
  }
}

const me = new Traveler("Geno", 26, "Sacramento");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "nowhere");
console.log(other.getGreeting());
