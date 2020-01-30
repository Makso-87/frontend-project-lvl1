// Pair

const consPair = (x, y) => (f) => f(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);

// Trinity

const consTrinity = (a, b, c) => (f) => f(a, b, c);
const get1 = (trinity) => trinity((x) => x);
const get2 = (trinity) => trinity((x, y) => y);
const get3 = (trinity) => trinity((x, y, z) => z);

// simpleNumber

const simpleNumber = (number, counter = 2) => {
  if (number % counter === 0) {
    if (number === counter) return true;
    return false;
  }
  return simpleNumber(number, counter + 1);
};

// randomNumber

const randomNumber = (topLimitOfNumber = 100) => {
  const num = Math.round(Math.random() * topLimitOfNumber);
  return num;
};

// randomChar

const randomChar = () => {
  const chars = '+-*';
  let num = 0;
  let check = false;
  const topLimitOfNumber = 10;
  do {
    num = Math.floor(Math.random() * topLimitOfNumber);
    if (num < chars.length) check = true;
    else check = false;
  } while (!check);

  return chars[num];
};

// algebProgression

const algebProgression = (acc = [], num = 2, step = 2, length = 10) => {
  if (length < 0) return acc;
  acc[acc.length] = num;
  const newNum = num + step;
  return algebProgression(acc, newNum, step, length - 1);
};

// randomProgression

const randomProgression = (number, step, length) => {
  const arr = algebProgression([], number, step, length);
  let num = 0;
  let check = false;
  let replaceableElement = 0;

  do {
    num = randomNumber();
    if (num < arr.length) check = true;
  } while (!check);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === num) {
      replaceableElement = arr[i];
      arr[i] = '..';
    }
  }

  const string = (acc = '', array, counter = 0) => {
    if (counter === array.length) return acc;
    const newAcc = `${acc} ${array[counter]}`;
    return string(newAcc, array, counter + 1);
  };

  const result = string('', arr).trim();
  const results = consPair(result, replaceableElement);

  return results;
};

// gcd - greatest common divider

const gcd = (num1, num2) => {
  let divider = 0;
  let minNumber = false;
  if (num1 > num2) {
    divider = num1 % num2;
    minNumber = num2;
  } else {
    divider = num2 % num1;
    minNumber = num1;
  }
  if (divider === 0) return minNumber;

  return gcd(divider, minNumber);
};

export {
  consPair,
  car,
  cdr,
  consTrinity,
  get1,
  get2,
  get3,
  simpleNumber,
  randomNumber,
  randomChar,
  randomProgression,
  gcd,
  algebProgression,
};
