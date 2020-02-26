const chars = '+-*';

// Trinity

const consTrinity = (a, b, c) => (f) => f(a, b, c);
const get1 = (trinity) => trinity((x) => x);
const get2 = (trinity) => trinity((x, y) => y);
const get3 = (trinity) => trinity((x, y, z) => z);


// getRandomNumber

const getRandomNumber = (minNumberRange, maxNumberRange) => {
  let num = 0;
  const order = String(maxNumberRange).length;
  let multiplier = '1';

  while (multiplier.length <= order) {
    multiplier += '0';
  }

  do {
    num = Math.floor(Math.random() * Number(multiplier));
  } while (num < minNumberRange || num > maxNumberRange);

  return num;
};

export {
  chars,
  consTrinity,
  get1,
  get2,
  get3,
  getRandomNumber,
};
