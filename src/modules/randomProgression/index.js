import { cons } from '../pairs';
import algebProgression from '../algebProgression';
import randomNumber from '../randomNumber';

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

  const result = string('', arr, 0).trim();
  const results = cons(result, replaceableElement);

  return results;
};

export default randomProgression;
