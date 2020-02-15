import engine from '../engine';
import { getRandomNumber, consTrinity } from '../modules';

const getGreatestCommoDiviser = (num1, num2) => {
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

  return getGreatestCommoDiviser(divider, minNumber);
};

const checkGreatestCommonDiviser = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = getGreatestCommoDiviser(num1, num2);
  const question = `${num1} ${num2}`;

  const results = consTrinity(question, String(correctAnswer));
  return results;
};

const greating = 'Calculate "GSD" - the greatest common divisor of two numbers.';

const brainGreatestCommoDiviser = () => {
  engine(checkGreatestCommonDiviser, greating);
};

export default brainGreatestCommoDiviser;
