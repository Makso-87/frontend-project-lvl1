const topLimitOfNumber = 10;

// Pair

const consPair = (x, y) => (f) => f(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);

// Trinity

const consTrinity = (a, b, c) => (f) => f(a, b, c);
const get1 = (trinity) => trinity((x) => x);
const get2 = (trinity) => trinity((x, y) => y);
const get3 = (trinity) => trinity((x, y, z) => z);


// randomNumber

const randomNumber = (maxNumberRange = 100) => {
  const num = Math.round(Math.random() * maxNumberRange);
  return num;
};

export {
  consPair,
  car,
  cdr,
  consTrinity,
  get1,
  get2,
  get3,
  randomNumber,
  topLimitOfNumber,
};
