import { createSlice } from '@reduxjs/toolkit';

import { getCampers } from './trucksOperations.js';

const initialState = {
  total: 0,
  isRefreshing: false,
  error: null,
  filters: {
    location: '',
    equipment: {
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
    form: '',
  },
  queryFilters: '',
  items: [],
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    addLocation(state, action) {
      state.filters.location = action.payload;
    },
    addEquipment(state, action) {
      state.filters.equipment[action.payload] =
        !state.filters.equipment[action.payload];
    },
    addType(state, action) {
      state.filters.form = action.payload;
    },
    addQueryFilters(state, action) {
      state.queryFilters = action.payload;
    },
  },
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
