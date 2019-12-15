// function square(x) {
//   return x * x;
// }
// console.log(square(3));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(9));

const fullName = "Eugenio Bonello";
// const getFirstName = name => {
//   return fullName.split(" ")[0];
// };
const getFirstName = name => fullName.split(" ")[0];

console.log(getFirstName(fullName));

// command babel src/playground/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch
