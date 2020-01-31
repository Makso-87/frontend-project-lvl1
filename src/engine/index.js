import readlineSync from 'readline-sync';
import {
  get1, get2, get3, consTrinity,
} from '../modules';

// greating

const greating = (customText = 'Это интересная игра') => {
  console.log('Добро пожаловать в "Игры разума"!');
  console.log(customText);
  const userName = readlineSync.question('\n\nМогу я спросить Ваше имя, товарищ? ');
  console.log(`Привет, ${userName}!`);
  return userName;
};

// farewell

const farewell = (userName = 'Игрок', condition = false, answer, answerDefault) => {
  if (condition) {
    console.log(`Поздравляем, ${userName}, Вы очень умный!`);
  } else {
    console.log(`"${answer}" - ответ неправильный :( Правильный ответ ${answerDefault}.\n Попробуйте еще раз, ${userName}`);
  }
};

// gamesCheck

const gamesCheck = (game) => {
  let answersNumber = 0;
  let rezult = false;
  let callRezults = false;
  const numberOfRounds = 3;

  while (answersNumber < numberOfRounds) {
    callRezults = game();

    if (get1(callRezults)) {
      answersNumber += 1;
    } else {
      break;
    }
  }

  if (answersNumber === numberOfRounds) rezult = true;
  else rezult = false;

  const gamesResult = consTrinity(rezult, get2(callRezults), get3(callRezults));
  return gamesResult;
};

const engine = (game, greatingString) => {
  const userName = greating(greatingString);
  const checkResults = gamesCheck(game);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default engine;
