import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// create action
export const createUser = createAsyncThunk(
    'createUser',
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

// logInUser action
export const logInUser = createAsyncThunk(
    'logInUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/loginUser',
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

// getloggedInUserDetails action
export const getloggedInUserDetails = createAsyncThunk(
    'getloggedInUserDetails',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/getUsers',
                data,
                {
                    headers: {
                        "auth-token":data
                    }
                }
            );
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(error.response);
        }
    }
);

export const UsersDetail = createSlice({
    name: "User",
    initialState: {
        UserDetail: "",
        loading: false,
        error: null,
    },

    // reducers: {
    //     resetUserState: (state) => {
    //       state.resetUsers = [];
    //     },
    //   },

    extraReducers: (builder) => {
        builder
            .addCase(getloggedInUserDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(getloggedInUserDetails.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.UserDetail = action.payload;
            })
            .addCase(getloggedInUserDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export default UsersDetail.reducer;