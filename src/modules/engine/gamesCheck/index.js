import {
  cons, get1, get2, get3,
} from '../../trinity';

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

  const gamesResult = cons(rezult, get2(callRezults), get3(callRezults));
  return gamesResult;
};

export default gamesCheck;
