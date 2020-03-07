import { cons } from '@hexlet/pairs';
import getRandomNumber from '../modules';
import runGameEngine from '../engine';

const getGameData = () => {
  const lowerLimitNumber = 1;
  const topLimitNumber = 100;
  const num = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const question = `${num}`;
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameDescription = 'Enter "yes", if the number is even, otherwise enter "no".';

const runEvenGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runEvenGame;
