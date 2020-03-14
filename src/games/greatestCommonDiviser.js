import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../gameslibrary';

const minNumber = 1;
const maxNumber = 100;

const getGreatestCommoDiviser = (num1, num2) => {
  let divider = 0;
  let min = 0;

  if (num1 > num2) {
    divider = num1 % num2;
    min = num2;
  } else {
    divider = num2 % num1;
    min = num1;
  }
  if (divider === 0) return min;

  return getGreatestCommoDiviser(divider, min);
};

const getGameData = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = String(getGreatestCommoDiviser(num1, num2));
  const question = `${num1} ${num2}`;

  return cons(question, correctAnswer);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runGreatestCommoDiviserGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runGreatestCommoDiviserGame;
