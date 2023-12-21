import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IFormalizations } from '../../../components/FormFormalization';
import { v4 as uuid } from 'uuid';

export interface IFormalization extends IFormalizations {
  id: string;
}
export interface initialState {
  formalizations: Array<IFormalization>;
}

const initialState: initialState = {
  formalizations: [],
};

export const formalizationSlice = createSlice({
  name: 'addFormalization',
  initialState,
  reducers: {
    addFormalization: (state, action: PayloadAction<IFormalizations>) => {
      state.formalizations.push({ ...action.payload, id: uuid() });
    },
  },
});

export const { addFormalization } = formalizationSlice.actions;

export default formalizationSlice.reducer;
