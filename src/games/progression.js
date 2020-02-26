import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNumber } from '../modules';

const arrToString = (array) => {
  const iteration = (acc = '', counter = 0) => {
    if (counter === array.length) return acc;
    const newAcc = `${acc} ${array[counter]}`;
    return iteration(newAcc, counter + 1);
  };
  return iteration();
};

const progression = () => {
  const arr = [];
  const start = getRandomNumber(1, 10);
  const indexIncrement = getRandomNumber(1, 10);
  const indexLostItem = getRandomNumber(1, 10);
  let correctAnswer;

  for (let i = 1; i <= 10; i += 1) {
    if (i === indexLostItem) {
      arr[i - 1] = '..';
      correctAnswer = start + (i - 1) * indexIncrement;
    } else {
      arr[i - 1] = start + (i - 1) * indexIncrement;
    }
  }

  const question = arrToString(arr);

  return cons(question, String(correctAnswer));
};

const greeting = 'What number is missing in the arithmetic progression?';

const brainProgression = () => {
  engine(progression, greeting);
};

export default brainProgression;
