import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const engine = (game, greetingString) => {
  let rezult = false;
  let answer = false;
  let correctAnswer = false;
  const numberOfRounds = 3;

  console.log('Wellcome to the "Brain Games"!');
  console.log(greetingString);
  const userName = readlineSync.question('\n\nCan I ask your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const callResults = game();
    console.log(`The question is: ${car(callResults)}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = cdr(callResults);

    if (correctAnswer !== answer) {
      break;
    }
  }

  if (correctAnswer === answer) {
    console.log(`Congratulation, ${userName}, You are very smart!`);
  } else {
    console.log(`"${answer}" - is not correct :( Correct answer is ${correctAnswer}.\n try again, ${userName}`);
  }
};

export default engine;
