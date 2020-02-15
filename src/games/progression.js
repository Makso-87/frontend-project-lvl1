import engine from '../engine';
import {
  car, cdr, getRandomNumber, consPair,
} from '../modules';

const indexForMissingNumber = (length) => {
  let num = 0;
  let check = false;

  do {
    num = getRandomNumber(1, 100);
    if (num < length) check = true;
  } while (!check);

  return num;
};

const arrToString = (acc = '', array, counter = 0) => {
  if (counter === array.length) return acc;
  const newAcc = `${acc} ${array[counter]}`;
  return arrToString(newAcc, array, counter + 1);
};

// getAlgebProgression

const getAlgebProgression = (acc = [], num = 2, step = 2, length = 10) => {
  if (length < 0) return acc;
  acc[acc.length] = num;
  const newNum = num + step;
  return getAlgebProgression(acc, newNum, step, length - 1);
};

// getRandomProgression

const getRandomProgression = (number, step, length) => {
  const arr = getAlgebProgression([], number, step, length);
  let replaceableElement = 0;
  const num = indexForMissingNumber(arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === num) {
      replaceableElement = arr[i];
      arr[i] = '..';
    }
  }

  const result = arrToString('', arr).trim();
  const results = consPair(result, replaceableElement);

  return results;
};

const progression = () => {
  const startNumber = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const progress = getRandomProgression(startNumber, stepProgression);
  const str = car(progress);
  const correctAnswer = cdr(progress);
  const question = `${str}`;

  const results = consPair(question, String(correctAnswer));
  return results;
};

const greating = 'What number is missing in the arithmetic progression?';

const brainProgression = () => {
  engine(progression, greating);
};

export default brainProgression;
