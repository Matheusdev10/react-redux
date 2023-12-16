import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { ICompanies } from '../../../components/FormCompanies';

export interface ICompanie extends ICompanies {
  id: string;
}

export interface initialState {
  companies: Array<ICompanie>;
  filterText: string;
}

const initialState: initialState = {
  companies: [],
  filterText: '',
};

export const companieSlice = createSlice({
  name: 'addCompanie',
  initialState,
  reducers: {
    addNewCompanie: (state, action: PayloadAction<ICompanies>) => {
      state.companies.push({ ...action.payload, id: uuid() });
    },

    removeCompanie: (state, action: PayloadAction<ICompanie>) => {
      state.companies = state.companies.filter(
        (companie) => companie.id !== action.payload.id
      );
    },

    filterCompanie: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
  },
});

export const { addNewCompanie, removeCompanie, filterCompanie } =
  companieSlice.actions;

export default companieSlice.reducer;
