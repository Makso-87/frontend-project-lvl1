const algebProgression = (acc = [], num = 2, step = 2, length = 10) => {
  if (length < 0) return acc;
  acc[acc.length] = num;
  const newNum = num + step;
  return algebProgression(acc, newNum, step, length - 1);
};

export default algebProgression;
