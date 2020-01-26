const algebProgression = (acc = [], num = 2, step = 2, len = 10) => {
  if (len < 0) return acc;
  acc[acc.length] = num;
  const newNum = num + step;
  return algebProgression(acc, newNum, step, len - 1);
};

export default algebProgression;
