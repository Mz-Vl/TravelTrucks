import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    campers: [],
    status: 'idle',
    error: null,
    favorites: [],
};

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
    return response.data;
});

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
    toggleFavorite: (state, action) => {
        const camperId = action.payload;
        if (state.favorites.includes(camperId)) {
            state.favorites = state.favorites.filter(id => id !== camperId);
        } else {
            state.favorites.push(camperId);
        }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCampers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.campers = action.payload;
        })
        .addCase(fetchCampers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const { toggleFavorite } = campersSlice.actions;

export default campersSlice.reducer;