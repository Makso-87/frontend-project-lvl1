import { getRandomNumber, consPair } from '../modules';
import engine from '../engine';

const evenNumbers = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const results = consPair(question, correctAnswer);
  return results;
};

const greating = 'Enter "yes", if the number is even, otherwise enter "no".';

const brainEven = () => {
  engine(evenNumbers, greating);
};

export default brainEven;
