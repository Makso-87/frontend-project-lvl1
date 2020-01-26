const gcd = (num1, num2) => {
  let divider = 0;
  let minNumber = false;
  if (num1 > num2) {
    divider = num1 % num2;
    minNumber = num2;
  } else {
    divider = num2 % num1;
    minNumber = num1;
  }
  if (divider === 0) return minNumber;

  return gcd(divider, minNumber);
};

export default gcd;
