import { cons } from '@hexlet/pairs';
import runGameEngine from '../engine';
import getRandomNumber from '../modules';

const getGameData = () => {
  const lowerLimitNumber = 1;
  const topLimitNumber = 10;
  const lowerLimitNumberForLostItem = 0;
  const topLimitNumberForLostItem = 9;
  const sequence = [];
  const start = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const indexIncrement = getRandomNumber(lowerLimitNumber, topLimitNumber);
  const indexLostItem = getRandomNumber(lowerLimitNumberForLostItem, topLimitNumberForLostItem);
  const progressionLength = 10;
  let correctAnswer;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === indexLostItem) {
      sequence[i] = '..';
      correctAnswer = start + i * indexIncrement;
    } else {
      sequence[i] = start + i * indexIncrement;
    }
  }

  const question = sequence.join(' ');

  return cons(question, String(correctAnswer));
};

const gameDescription = 'What number is missing in the arithmetic progression?';

const runProgressionGame = () => {
  runGameEngine(getGameData, gameDescription);
};

export default runProgressionGame;
