import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const runGameEngine = (runGame, gameDescription) => {
  const numberOfRounds = 3;
  console.log('Wellcome to the "Brain Games"!');
  console.log(gameDescription);
  const userName = readlineSync.question('\n\nCan I ask your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const callResults = runGame();
    console.log(`The question is: ${car(callResults)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(callResults);

    if (correctAnswer !== answer) {
      console.log(`"${answer}" - is not correct :( Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log('Correct!');
};

export default runGameEngine;
