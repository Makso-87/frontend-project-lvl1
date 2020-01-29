import { get1, get2, get3 } from '../../modules/trinity';
import progression from './progression';
import gamesCheck from '../../modules/engine/gamesCheck';
import greating from '../../modules/engine/greating';
import farewell from '../../modules/engine/farewell';

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

  const results = cons(result, answer, correctAnswer);
  return results;
};

const brainProgression = () => {
  const userName = greating('Какое число пропущено в арифметической прогрессии?');
  const checkResults = gamesCheck(progression);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainProgression;
