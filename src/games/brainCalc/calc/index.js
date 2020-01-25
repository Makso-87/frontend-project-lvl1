import readlineSync from 'readline-sync';
import randomChar from '../../../modules/randomChar';
import randomNumber from '../../../modules/randomNumber';
import { cons } from '../../../modules/trinity';

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

  const results = cons(result, answer, correctAnswer);
  return results;
};

export default calc;
