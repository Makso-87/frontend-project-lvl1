import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../modules';
import engine from '../engine';

const getEvenNumbers = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const greeting = 'Enter "yes", if the number is even, otherwise enter "no".';

const brainEven = () => {
  engine(getEvenNumbers, greeting);
};

export default brainEven;
