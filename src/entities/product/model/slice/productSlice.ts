import { createSlice } from '@reduxjs/toolkit'
import { ProductSchema } from '../types/ProductSchema'

const initialState: ProductSchema = {
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
