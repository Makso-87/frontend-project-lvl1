import readlineSync from 'readline-sync';
import { farewell, greating, gamesCheck } from '../../engine';
import {
  get1, get2, get3, randomChar, randomNumber, consTrinity,
} from '../../modules';

const calc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const char = randomChar();
  let correctAnswer = 0;
  let result = false;

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
    default: correctAnswer = 'Результат не известен';
  }

  console.log(`Вопрос: ${num1} ${char} ${num2}`);
  const answer = Number(readlineSync.question('Ваш ответ: '));

  if (answer === correctAnswer) result = true;

  const results = consTrinity(result, answer, correctAnswer);
  return results;
};

const brainCalc = () => {
  const userName = greating('Каков результат выражения?');
  const checkResults = gamesCheck(calc);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainCalc;
