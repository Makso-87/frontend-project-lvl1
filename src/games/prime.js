import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../gameslibrary';

const minNumber = 1;
const maxNumber = 1000;

const isPrimeNumber = (num) => {
  const iteration = (number, counter) => {
    if (number % counter === 0) {
      if (number === counter) return true;
      return false;
    }
    return iteration(number, counter + 1);
  };

  return iteration(num, 2);
};

const getGameData = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = String(number);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const runPrimeGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runPrimeGame;
