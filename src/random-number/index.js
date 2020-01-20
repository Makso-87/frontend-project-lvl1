const randoNumber = () => {
  const num = Math.round(Math.random() * 100);
  console.log(`Вопрос: ${num}`);
  return num;
};

export default randoNumber;
