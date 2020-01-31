import readlineSync from 'readline-sync';
import engine from '../../engine';
import { randomNumber, simpleNumber, consTrinity } from '../../modules';

const prime = () => {
  const topLimitOfNumber = 1000;
  const number = randomNumber(topLimitOfNumber);
  console.log(`Вопрос: ${number}`);
  const answer = readlineSync.question('Ваш ответ: ');
  let correctAnswer = 'Нет';
  let result = false;

  if (simpleNumber(number)) {
    correctAnswer = 'Да';
  }

  if (answer.toUpperCase() === correctAnswer.toUpperCase()) result = true;

  const results = consTrinity(result, answer, correctAnswer);

  return results;
};

const greating = 'Является ли число простым?';

const brainPrime = () => {
  engine(prime, greating);
};

export default brainPrime;
