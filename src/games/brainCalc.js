import engine from '../engine';
import { randomNumber, consPair } from '../modules';

// randomChar

const randomChar = () => {
  const chars = '+-*';
  let num = 0;
  let check = false;
  const topLimitOfNumber = 10;
  do {
    num = Math.floor(Math.random() * topLimitOfNumber);
    if (num < chars.length) check = true;
    else check = false;
  } while (!check);

  return chars[num];
};

const calc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const char = randomChar();
  let correctAnswer = 0;

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
    default: correctAnswer = 'Result is undefined';
  }

  const question = `${num1} ${char} ${num2}`;

  const results = consPair(question, String(correctAnswer));
  return results;
};

const greating = 'What is the result of the expression?';

const brainCalc = () => {
  engine(calc, greating);
};

export default brainCalc;
