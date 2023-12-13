import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IInputs } from '../../../components/FormUsers';

export interface IUser extends IInputs {
  id: string;
}

export interface initialState {
  users: Array<IUser>;
}
const initialState: initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IInputs>) => {
      const newUser: IUser = { ...action.payload, id: uuid() };
      state.users.push(newUser);
    },

    removeUser: (state, action: PayloadAction<IUser>) => {
      const removeUser = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      state.users = removeUser;
    },
  },
});

export const { addNewUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
