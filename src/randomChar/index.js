const randomChar = () => {
  const chars = '+-*';
  let num = 0;
  let check = false;
  do {
    num = Math.floor(Math.random() * 10);
    if (num < 3) check = true;
    else check = false;
  } while (!check);

  return chars[num];
};

export default randomChar;
