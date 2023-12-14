import { IInputs } from '../../../components/FormUsers';
import { store } from '../../index';
import { IUser, addNewUser, removeUser, searchUser } from './Slice';

const { dispatch } = store;

export const handleAdd = (data: IInputs) => {
  dispatch(addNewUser(data));
};

export const onRemove = (data: IUser) => {
  dispatch(removeUser(data));
};

export const handleFilterText = (text: string) => {
  dispatch(searchUser(text));
};
