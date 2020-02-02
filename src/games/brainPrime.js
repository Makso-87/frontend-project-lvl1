import engine from '../engine';
import { randomNumber, consPair } from '../modules';

const simpleNumber = (number, counter = 2) => {
  if (number % counter === 0) {
    if (number === counter) return true;
    return false;
  }
  return simpleNumber(number, counter + 1);
};

const prime = () => {
  const topLimitOfNumber = 1000;
  const number = randomNumber(topLimitOfNumber);
  const question = `${number}`;
  let correctAnswer = 'No';

  if (simpleNumber(number)) {
    correctAnswer = 'Yes';
  }

  const results = consPair(question, correctAnswer);

  return results;
};

const greating = 'The number is simple?';

const brainPrime = () => {
  engine(prime, greating);
};

export default brainPrime;
