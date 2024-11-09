import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = createAsyncThunk(
  'trucks/getMonth',
  async (pagination, thunkAPI) => {
    const { page, limit } = pagination;

    try {
      const { data } = await axios.get(`/campers?page=${page}&limit=${limit}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
