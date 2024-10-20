// src/features/itemsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItems } from '../services/Api';

export const fetchItemsAsync = createAsyncThunk('items/fetchItems', async () => {
    const data = await fetchItems();
    return data;
});

interface ItemsState {
    items: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ItemsState = {
    items: [],
    status: 'idle',
    error: null,
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchItemsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default itemsSlice.reducer;
