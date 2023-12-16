import { configureStore } from '@reduxjs/toolkit';
import user from './features/users/Slice';
import companie from './features/companies/Slice';
import filterCompanie from './features/companies/Slice';
export const store = configureStore({
  reducer: { user, companie, filterCompanie },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
