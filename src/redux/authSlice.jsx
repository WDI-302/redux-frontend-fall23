import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../lib/Axios'
import { checkAuthToken } from '../lib/checkAuthToken'
import { setMessage, setUser } from './userSlice'

export const authCheck = createAsyncThunk('auth/authCheck', async (_, thunkAPI) => {
    try {
        checkAuthToken()

        let response = await Axios.post('/users/authtoken')

        // dispatch response.data to the userSlice
        thunkAPI.dispatch(setUser(response.data))

        // save token if token exists
        // if (response.data.token) {
        //     localStorage.setItem(response.data.token) 
        // }

        //save token always 
        localStorage.setItem('reduxToken', response.data.token) 
       
        return response.data
        
    } catch (error) {
        thunkAPI.dispatch(setMessage(error.response.data))
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
    },
    extraReducers: builder => {
        builder
            .addCase(authCheck.rejected, (state, action) => {
                console.log(action.payload)
                state.isAuth = false
            })
            .addCase(authCheck.fulfilled, state => {
                state.isAuth = true
            })

    }
})

export const { authSuccess, authFailure } = authSlice.actions

export default authSlice.reducer