import readlineSync from 'readline-sync';
import { car, cdr } from '../../../modules/pairs';
import { cons } from '../../../modules/trinity';
import randomProgression from '../../../modules/randomProgression';
import randomNumber from '../../../modules/randomNumber';

const progression = () => {
  const startNumber = randomNumber(10);
  const stepProgression = randomNumber(10);
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
