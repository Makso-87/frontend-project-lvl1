import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNumber, chars } from '../modules';

// randomChar

const getRandomChar = () => {
  const num = getRandomNumber(0, 2);

  return chars[num];
};

const calc = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
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

const greeting = 'What is the result of the expression?';

const brainCalc = () => {
  engine(calc, greeting);
};

export default brainCalc;
