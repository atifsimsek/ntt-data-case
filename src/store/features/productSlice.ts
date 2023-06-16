import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../services/dataService';
import { useAppSelector } from '../hooks';
import { Product } from '../../Types/AllTypes';

interface DataState {
  favorites: Product[];
  allProducts: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: DataState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  allProducts: [],
  isLoading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleFavorite: (state, action) => {
      const product = action.payload;
      const index = state.favorites.findIndex(
        (item: Product) => item.id === product.id
      );
      if (index === -1) {
        state.favorites.push(product);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || '';
    });
  },
});

export const { handleFavorite } = productSlice.actions;

export default productSlice.reducer;

export const useData = () => useAppSelector((state) => state.products);
