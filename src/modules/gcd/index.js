const gcd = (num1, num2) => {
  let div = 0;
  let min = false;
  if (num1 > num2) {
    div = num1 % num2;
    min = num2;
  } else {
    div = num2 % num1;
    min = num1;
  }
  if (div === 0) return min;

  return gcd(div, min);
};

export default gcd;
