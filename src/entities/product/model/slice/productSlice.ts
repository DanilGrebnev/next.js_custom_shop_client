import { createSlice } from '@reduxjs/toolkit'
import { IProductSchema } from '../types/ProductSchema'

const initialState: IProductSchema = {
    amount: 0,
}

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
    },
})

export const { increment, decrement } = productSlice.actions

export const productReducer = productSlice.reducer
