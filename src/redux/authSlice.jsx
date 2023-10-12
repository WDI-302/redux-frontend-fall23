import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../lib/Axios'
import { checkAuthToken } from '../lib/checkAuthToken'

export const authCheck = createAsyncThunk('auth/authCheck', async (_, thunkAPI) => {
    try {
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
} )



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        authSuccess: (state) => {
            state.isAuth = true
        },
        authFailure: state => {
            state.isAuth = false
        }
    }
})

export const { authSuccess, authFailure } = authSlice.actions

export default authSlice.reducer