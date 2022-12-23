import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza } from './types';

export const fetchPizzasRedux = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://638c7739eafd555746a6f817.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
