import engine from '../engine';
import { getRandomNumber, consPair } from '../modules';

const checkSimpleNumber = (num) => {
  const iteration = (number, counter) => {
    if (number % counter === 0) {
      if (number === counter) return true;
      return false;
    }
    return iteration(number, counter + 1);
  };

  return iteration(num, 2);
};

const prime = () => {
  const number = getRandomNumber(1, 1000);
  const question = `${number}`;
  let correctAnswer = 'no';

  if (checkSimpleNumber(number)) {
    correctAnswer = 'yes';
  }

  const results = consPair(question, correctAnswer);

  return results;
};

const greating = 'The number is simple?';

const brainPrime = () => {
  engine(prime, greating);
};

export default brainPrime;
