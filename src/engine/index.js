import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '../modules';

const engine = (game, greatingString) => {
  let answersNumber = 0;
  let rezult = false;
  let answer = false;
  let correctAnswer = false;
  const numberOfRounds = 3;

  console.log('Wellcome to the "Brain Games"!');
  console.log(greatingString);
  const userName = readlineSync.question('\n\nCan I ask your name? ');
  console.log(`Hello, ${userName}!`);

  while (answersNumber < numberOfRounds) {
    const callResults = game();
    console.log(`The question is: ${car(callResults)}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = cdr(callResults);

    if (correctAnswer === answer) {
      answersNumber += 1;
    } else {
      break;
    }
  }

  if (answersNumber === numberOfRounds) rezult = true;

  if (rezult) {
    console.log(`Congratulation, ${userName}, You are very smart!`);
  } else {
    console.log(`"${answer}" - is not correct :( Correct answer is ${correctAnswer}.\n try again, ${userName}`);
  }
};

export default engine;
