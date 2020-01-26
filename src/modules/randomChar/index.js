const randomChar = () => {
  const chars = '+-*';
  let num = 0;
  let check = false;
  const topLimitOfNumber = 10;
  do {
    num = Math.floor(Math.random() * topLimitOfNumber);
    if (num < chars.length) check = true;
    else check = false;
  } while (!check);

  return chars[num];
};

export default randomChar;
