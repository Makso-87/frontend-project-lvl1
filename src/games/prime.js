import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNumber } from '../modules';

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
  const correctAnswer = checkSimpleNumber(number) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const greeting = 'The number is simple?';

const brainPrime = () => {
  engine(prime, greeting);
};

export default brainPrime;
