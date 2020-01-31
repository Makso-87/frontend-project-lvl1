import readlineSync from 'readline-sync';
import engine from '../../engine';
import {
  car, cdr, randomNumber, randomProgression, consTrinity,
} from '../../modules';

const progression = () => {
  const topLimitOfNumber = 10;
  const startNumber = randomNumber(topLimitOfNumber);
  const stepProgression = randomNumber(topLimitOfNumber);
  const progress = randomProgression(startNumber, stepProgression);
  const string = car(progress);
  const correctAnswer = cdr(progress);
  let result = false;
  console.log(`Вопрос: ${string}`);
  const answer = Number(readlineSync.question('Ваш ответ: '));

  if (answer === correctAnswer) result = true;

  const results = consTrinity(result, answer, correctAnswer);
  return results;
};

const greating = 'Какое число пропущено в арифметической прогрессии?';

const brainProgression = () => {
  engine(progression, greating);
};

export default brainProgression;
