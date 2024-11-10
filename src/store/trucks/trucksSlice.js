import { createSlice } from '@reduxjs/toolkit';

import { getCampers } from './trucksOperations.js';

const initialState = {
  total: 0,
  items: [],
  isRefreshing: false,
  error: null,
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.total = payload.total;
        state.items = [...state.items, ...payload.items];
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export default trucksSlice.reducer;
