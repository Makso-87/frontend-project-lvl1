const farewell = (userName = 'Игрок', condition = false, answer, answerDefault) => {
  if (condition) {
    console.log(`Поздравляем, ${userName}, Вы очень умный!`);
  } else {
    console.log(`"${answer}" - ответ неправильный :( Правильный ответ ${answerDefault}.\n Попробуйте еще раз, ${userName}`);
  }
};

export default farewell;
