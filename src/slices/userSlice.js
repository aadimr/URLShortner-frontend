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

// export const UsersDetail = createSlice({
//     name: "User",
//     initialState: {
//         UserDetail: "",
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         getLoggedInUserDetail: (state, action) => {
//           state.UserDetail = action.payload
//         },
//       },
// });

// export const { getLoggedInUserDetail } = UsersDetail.actions;

// export default UsersDetail.reducer;