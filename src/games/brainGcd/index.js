import { get1, get2, get3 } from '../../modules/trinity';
import greatestCommonDiviser from './greatestCommonDivider';
import gamesCheck from '../../modules/gamesCheck';
import greating from '../../modules/greating';
import farewell from '../../modules/farewell';

const brainGcd = () => {
  const userName = greating('Вычислите "НОД" - наибольший общий делитель двух чисел.');
  const checkResults = gamesCheck(greatestCommonDiviser);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainGcd;
