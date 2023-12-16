import { ICompanies } from '../../../components/FormCompanies';
import { store } from '../../index';
import {
  ICompanie,
  addNewCompanie,
  removeCompanie,
  filterCompanie,
} from './Slice';

const { dispatch } = store;

export const handleAddCompanies = (data: ICompanies) => {
  dispatch(addNewCompanie(data));
};

export const handleRemoveCompanies = (data: ICompanie) => {
  dispatch(removeCompanie(data));
};

export const handleFilterCompanies = (text: string) => {
  dispatch(filterCompanie(text));
};
