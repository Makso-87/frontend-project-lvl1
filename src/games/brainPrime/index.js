import { get1, get2, get3 } from '../../modules/trinity';
import prime from './prime';
import gamesCheck from '../../modules/engine/gamesCheck';
import greating from '../../modules/engine/greating';
import farewell from '../../modules/engine/farewell';

const brainPrime = () => {
  const userName = greating('Является ли число простым?');
  const checkResults = gamesCheck(prime);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainPrime;
