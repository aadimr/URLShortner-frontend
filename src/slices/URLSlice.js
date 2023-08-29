import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// shortURL action
export const shortURL = createAsyncThunk(
    'shortURL',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/users',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const URLDetails = createSlice({
    name: "User",
    initialState: {
        URLs: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(shortURL.pending, (state) => {
                state.loading = true;
            })
            .addCase(shortURL.fulfilled, (state, action) => {
                state.loading = false;
                state.URLs.push(action.payload);
            })
            .addCase(shortURL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export default URLDetails.reducer;