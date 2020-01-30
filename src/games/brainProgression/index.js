import readlineSync from 'readline-sync';
import { farewell, greating, gamesCheck } from '../../engine';
import {
  get1, get2, get3, car, cdr, randomNumber, randomProgression, consTrinity,
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

const brainProgression = () => {
  const userName = greating('Какое число пропущено в арифметической прогрессии?');
  const checkResults = gamesCheck(progression);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainProgression;
