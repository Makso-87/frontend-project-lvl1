
const randomNumber = (topLimitOfNumber = 100) => {
  const num = Math.round(Math.random() * topLimitOfNumber);
  return num;
};

export default randomNumber;
