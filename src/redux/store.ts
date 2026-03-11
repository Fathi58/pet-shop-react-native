import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import petsReducer from './petSlice'

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
