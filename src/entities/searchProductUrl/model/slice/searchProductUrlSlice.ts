import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: '',
}

export const searchProductUrlSlice = createSlice({
    name: 'searchProductUrl',
    initialState,
    reducers: {
        setUrl(state, action) {
            state.url = action.payload
        },
    },
})

export const searchProductUrlReducer = searchProductUrlSlice.reducer
