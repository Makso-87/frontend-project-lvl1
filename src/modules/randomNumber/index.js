const randomNumber = (multupier = 100) => {
  const num = Math.round(Math.random() * multupier);
  return num;
};

export default randomNumber;
