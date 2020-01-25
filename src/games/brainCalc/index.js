import { get1, get2, get3 } from '../../trinity';
import calc from './calc';
import gamesCheck from '../../gamesCheck';
import greating from '../../greating';
import farewell from '../../farewell';

const brainCalc = () => {
  const userName = greating('Каков результат выражения?');
  const checkResults = gamesCheck(calc);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainCalc;
