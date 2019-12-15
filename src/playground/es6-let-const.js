// command babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
var nameVar = "Geno";
var nameVar = "Not Geno";
console.log("nameVar", nameVar);

let nameLet = "Also not Geno";
nameLet = "definitly not Geno";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "Zezzy";
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = "Eugenio Bonello";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
