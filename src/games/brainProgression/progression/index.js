import readlineSync from 'readline-sync';
import { car, cdr } from '../../../modules/pairs';
import { cons } from '../../../modules/trinity';
import randomProgression from '../../../modules/randomProgression';
import randomNumber from '../../../modules/randomNumber';

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

export default progression;
