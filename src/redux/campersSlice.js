// campersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    allCampers: [],
    filteredCampers: [],
    currentCamper: null,
    status: 'idle',
    error: null,
    favorites: [],
};

// const initialState = {
//     allCampers: [],
//     filteredCampers: [],
//     currentCamper: {
//         name: '',
//         gallery: [],
//         reviews: [],
        
//     },
//     status: 'idle',
//     error: null,
//     favorites: [],
// };

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async () => {
        const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        return response.data.items;
    }
);

export const fetchCamperDetails = createAsyncThunk(
    'campers/fetchCamperDetails',
    async (camperId) => {
        const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`);
        return response.data;
    }
);

// export const fetchCamperDetails = createAsyncThunk(
//     'campers/fetchCamperDetails',
//     async (camperId, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`);
//             console.log('API response:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching camper details:', error);
//             return rejectWithValue(error.message);
//         }
//     }
// );


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
        applyFilters: (state, action) => {
            const { location, form, equipment } = action.payload;
            state.filteredCampers = state.allCampers.filter(camper => {
                const locationMatch = !location || camper.location.toLowerCase().includes(location.toLowerCase());
                const formMatch = !form || camper.form === form;
                const equipmentMatch = equipment.length === 0 || equipment.every(eq => camper[eq]);
                return locationMatch && formMatch && equipmentMatch;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allCampers = action.payload;
                state.filteredCampers = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCamperDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCamperDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentCamper = action.payload;
            })
            .addCase(fetchCamperDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { toggleFavorite, applyFilters } = campersSlice.actions;

export default campersSlice.reducer;