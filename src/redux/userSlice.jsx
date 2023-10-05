import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../lib/Axios'
//thunk middleware is for async
// createAsyncThunk, first parameter is your action.type (create is with the name + / + name of function)
// nest param is the function, it takes in the payload data from the dispatch
export const loginTest = createAsyncThunk('user/loginTest', async () => {
    // call the backend / API
    let response = await Axios.get('/users/login-test')

    // return sets the action.payload for the extraReducers
    // return {
        // payload: response.data
    // }
    // essentially this breaks down to
    // dispatch({
    //     type: 'user/loginTest',
    //     payload: response.data
    // })

    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstname: '',
        lastname: '',
        email: ''
    },
    //syncronous set state
    reducers: {
        addUser: (state, action) => {}

    },
    // asyncronous set state
    extraReducers: builder => {
        builder.addCase(loginTest.fulfilled, (state, action) => {
            state = action.payload
        })
    }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer