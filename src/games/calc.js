import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 100;
const minNumberForOperator = 0;

const getRandomOperator = () => {
  const operators = '+-*';
  const index = getRandomNumber(minNumberForOperator, operators.length - 1);

  return operators[index];
};

const getGameData = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
  const operator = getRandomOperator();
  let correctAnswer;

  switch (operator) {
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

  const question = `${num1} ${operator} ${num2}`;

  return cons(question, String(correctAnswer));
};

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runCalcGame;
