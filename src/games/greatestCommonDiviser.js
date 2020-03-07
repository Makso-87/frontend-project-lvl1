import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../modules';

const getGreatestCommoDiviser = (num1, num2) => {
  let divider = 0;
  let minNumber = 0;
  if (num1 > num2) {
    divider = num1 % num2;
    minNumber = num2;
  } else {
    divider = num2 % num1;
    minNumber = num1;
  }
  if (divider === 0) return minNumber;

  return getGreatestCommoDiviser(divider, minNumber);
};

const getGameData = () => {
  const lowerLimitNumber = 1;
  const topLimitNumber = 100;
  const num1 = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const num2 = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const correctAnswer = getGreatestCommoDiviser(num1, num2);
  const question = `${num1} ${num2}`;

  return cons(question, String(correctAnswer));
};

const gameDescription = 'Calculate "GCD" - the greatest common divisor of two numbers.';

const runGreatestCommoDiviserGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runGreatestCommoDiviserGame;
