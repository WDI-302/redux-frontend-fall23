import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstname: 'Paul'
    },
    //syncronous set state
    reducers: {

    }
})

export const {} = userSlice.actions

export default userSlice.reducer