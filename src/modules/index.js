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

export default getRandomNumber;
