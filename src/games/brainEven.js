import { randomNumber, consPair } from '../modules';
import engine from '../engine';

const evenNumbers = () => {
  const num = randomNumber();
  const question = `${num}`;
  const correctAnswer = (num % 2 === 0 || num === 0) ? 'Yes' : 'No';
  const results = consPair(question, correctAnswer);
  return results;
};

const greating = 'Enter "Yes", if the number is even, otherwise enter "No".';

const brainEven = () => {
  engine(evenNumbers, greating);
};

export default brainEven;
