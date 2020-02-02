import engine from '../engine';
import {
  car, cdr, randomNumber, consPair, topLimitOfNumber,
} from '../modules';

// algebProgression

const algebProgression = (acc = [], num = 2, step = 2, length = 10) => {
  if (length < 0) return acc;
  acc[acc.length] = num;
  const newNum = num + step;
  return algebProgression(acc, newNum, step, length - 1);
};

// randomProgression

const randomProgression = (number, step, length) => {
  const arr = algebProgression([], number, step, length);
  let num = 0;
  let check = false;
  let replaceableElement = 0;

  do {
    num = randomNumber();
    if (num < arr.length) check = true;
  } while (!check);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === num) {
      replaceableElement = arr[i];
      arr[i] = '..';
    }
  }

  const string = (acc = '', array, counter = 0) => {
    if (counter === array.length) return acc;
    const newAcc = `${acc} ${array[counter]}`;
    return string(newAcc, array, counter + 1);
  };

  const result = string('', arr).trim();
  const results = consPair(result, replaceableElement);

  return results;
};

const progression = () => {
  const startNumber = randomNumber(topLimitOfNumber);
  const stepProgression = randomNumber(topLimitOfNumber);
  const progress = randomProgression(startNumber, stepProgression);
  const string = car(progress);
  const correctAnswer = cdr(progress);
  const question = `${string}`;

  const results = consPair(question, String(correctAnswer));
  return results;
};

const greating = 'What number is missing in the arithmetic progression?';

const brainProgression = () => {
  engine(progression, greating);
};

export default brainProgression;
