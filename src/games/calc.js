import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../modules';

// randomChar

const getRandomChar = () => {
  const lowerLimitNumber = 0;
  const chars = '+-*';
  const index = getRandomNumber(lowerLimitNumber, chars.length);

  return chars[index];
};

const getGameData = () => {
  const lowerLimitNumber = 1;
  const topLimitNumber = 100;
  const num1 = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const num2 = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const char = getRandomChar();
  let correctAnswer;

  switch (char) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default: return null;
  }

  const question = `${num1} ${char} ${num2}`;

  return cons(question, String(correctAnswer));
};

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runCalcGame;
