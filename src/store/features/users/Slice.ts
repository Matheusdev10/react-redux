import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IInputs } from '../../../components/FormUsers';

export interface IUser extends IInputs {
  id: string;
}

export interface initialState {
  users: Array<IUser>;
  filterText: string;
}
const initialState: initialState = {
  users: [],
  filterText: '',
};

export const userSlice = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IInputs>) => {
      state.users.push({ ...action.payload, id: uuid() });
    },

    removeUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    searchUser: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
  },
});

export const { addNewUser, removeUser, searchUser } = userSlice.actions;

export default userSlice.reducer;
