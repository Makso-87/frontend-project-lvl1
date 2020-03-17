import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 10;
const minNumberForLostItem = 0;

const getGameData = () => {
  const progressionLength = 10;
  const sequence = [];
  const start = getRandomNumber(minNumber, maxNumber);
  const indexIncrement = getRandomNumber(minNumber, maxNumber);
  const indexLostItem = getRandomNumber(minNumberForLostItem, progressionLength - 1);
  const correctAnswer = String(start + indexLostItem * indexIncrement);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === indexLostItem) {
      sequence[i] = '..';
    } else {
      sequence[i] = start + i * indexIncrement;
    }
  }

  const question = sequence.join(' ');

  return cons(question, correctAnswer);
};

const gameDescription = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runProgressionGame;
