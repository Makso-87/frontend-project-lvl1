import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../modules';

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

const getGameData = () => {
  const lowerLimitNumber = 1;
  const topLimitNumber = 1000;
  const number = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const question = number.toString();
  const correctAnswer = checkSimpleNumber(number) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const gameDescription = 'The number is simple?';

const runPrimeGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runPrimeGame;
