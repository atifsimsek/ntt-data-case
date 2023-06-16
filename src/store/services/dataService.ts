import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'fetch/products',
  async (): Promise<any> => {
    try {
      const response = await axios(
        `https://honey-badgers-ecommerce.glitch.me/products`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.resolve(); // or return Promise.resolve(undefined);
    }
  }
);
