import { cons } from '@hexlet/pairs';
import getRandomNumber from '../gameslibrary';
import runGameEngine from '../engine';

const minNumber = 1;
const maxNumber = 100;

const getGameData = () => {
  const num = getRandomNumber(minNumber, maxNumber);
  const question = String(num);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runEvenGame;
