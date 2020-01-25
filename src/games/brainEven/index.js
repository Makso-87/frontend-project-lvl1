import { get1, get2, get3 } from '../../modules/trinity';
import evenNummbers from './evenNumbers';
import gamesCheck from '../../modules/gamesCheck';
import greating from '../../modules/greating';
import farewell from '../../modules/farewell';

const brainEven = () => {
  const userName = greating('Введите "Да", если число четное, в противном случае введите "Нет".');
  const checkResults = gamesCheck(evenNummbers);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainEven;
