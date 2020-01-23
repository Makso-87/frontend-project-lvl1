const gamesCheck = (game) => {
  let answersNumber = 0;

  while (answersNumber < 3) {
    if (game) {
      answersNumber += 1;
    } else {
      break;
    }
  }

  if (answersNumber === 3) return true;
  return false;
};

export default gamesCheck;
