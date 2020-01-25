const cons = (a, b, c) => (f) => f(a, b, c);
const get1 = (trinity) => trinity((x) => x);
const get2 = (trinity) => trinity((x, y) => y);
const get3 = (trinity) => trinity((x, y, z) => z);

export {
  cons, get1, get2, get3,
};
