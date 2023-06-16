import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
// Create store

const rootReducer = combineReducers({
  products: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
