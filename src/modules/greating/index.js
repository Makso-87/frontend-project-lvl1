import readlineSync from 'readline-sync';

const greating = (customText = 'Это интересная игра') => {
  console.log('Добро пожаловать в "Игры разума"!');
  console.log(customText);
  const userName = readlineSync.question('\n\nМогу я спросить Ваше имя, товарищ? ');
  console.log(`Привет, ${userName}!`);
  return userName;
};

export default greating;
