import engine from '../engine';
import { getRandomNumber, consPair, chars } from '../modules';

// randomChar

const getRandomChar = () => {
  const num = getRandomNumber(0, 2);

  return chars[num];
};

const calc = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const char = getRandomChar();
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
