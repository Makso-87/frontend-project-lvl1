const simpleNumber = (number, counter = 2) => {
  if (number % counter === 0) {
    if (number === counter) return true;
    return false;
  }
  return simpleNumber(number, counter + 1);
};

export default simpleNumber;
