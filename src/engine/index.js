import readlineSync from 'readline-sync';
import {
  car, cdr, get1, get2, get3, consPair, consTrinity,
} from '../modules';

// farewell

const farewell = (userName = 'Player', condition = false, answer, answerDefault) => {
  if (condition) {
    console.log(`Congratulation, ${userName}, You are very smart!`);
  } else {
    console.log(`"${answer}" - is not correct :( Correct answer is ${answerDefault}.\n try again, ${userName}`);
  }
};

const gameRun = (game) => {
  const callResults = game();
  const question = `The question is: ${car(callResults)}`;
  const correctAnswer = cdr(callResults);
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const results = consPair(answer, correctAnswer);
  return results;
};

// gamesCheck

const gamesCheck = (game) => {
  let answersNumber = 0;
  let rezult = false;
  let answer = false;
  let correctAnswer = false;
  const numberOfRounds = 3;

  while (answersNumber < numberOfRounds) {
    const results = gameRun(game);
    answer = car(results);
    correctAnswer = cdr(results);
    if (correctAnswer === answer) {
      answersNumber += 1;
    } else {
      break;
    }
  }

  if (answersNumber === numberOfRounds) rezult = true;
  else rezult = false;

  const gamesResult = consTrinity(rezult, answer, correctAnswer);
  return gamesResult;
};

const engine = (game, greatingString) => {
  console.log('Wellcome to the "Brain Games"!');
  console.log(greatingString);
  const userName = readlineSync.question('\n\nCan I ask your name? ');
  console.log(`Hello, ${userName}!`);

  const checkResults = gamesCheck(game);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default engine;
