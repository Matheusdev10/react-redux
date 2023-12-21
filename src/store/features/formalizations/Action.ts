import { IFormalizations } from '../../../components/FormFormalization';
import { store } from '../../index';
import { addFormalization } from './Slice';

const { dispatch } = store;

export const handleAddFormalization = (data: IFormalizations) => {
  dispatch(addFormalization(data));
};
