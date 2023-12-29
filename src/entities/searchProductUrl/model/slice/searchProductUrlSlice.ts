import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    url: '',
}

export const searchProductUrlSlice = createSlice({
    name: 'searchProductUrl',
    initialState,
    reducers: {},
})

export const searchProductUrlReducer = searchProductUrlSlice.reducer
