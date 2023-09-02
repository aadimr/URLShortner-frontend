import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// shortURL action
export const shortURL = createAsyncThunk(
    'shortURL',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://linkswift-endb.onrender.com/shortenUrl',
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

// getAllShortenedUrlsOfLoggedInUser action
export const getAllShortenedUrlsOfLoggedInUser = createAsyncThunk(
    'getAllShortenedUrlsOfLoggedInUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://linkswift-endb.onrender.com/user/${data}`,
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
    name: "URL",
    initialState: {
        allURLs: "",
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllShortenedUrlsOfLoggedInUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllShortenedUrlsOfLoggedInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allURLs = action.payload;
            })
            .addCase(getAllShortenedUrlsOfLoggedInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export default URLDetails.reducer;