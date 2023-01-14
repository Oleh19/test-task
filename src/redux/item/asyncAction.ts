import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item, SearchItemParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchItems = createAsyncThunk<Item[], SearchItemParams>(
  'item/fetchItemsStatus',
  async (params) => {
    const { search } = params;
    const { data } = await axios.get<Item[]>(`https://63c1c7b099c0a15d28f208e9.mockapi.io/items`, {
      params: pickBy(
        {
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
