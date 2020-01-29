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

const gamesResult = cons(rezult, get2(callRezults), get3(callRezults));
return gamesResult;
};

export {
    greating, farewell, gamesCheck
};