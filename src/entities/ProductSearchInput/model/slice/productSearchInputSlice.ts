import { createSlice } from '@reduxjs/toolkit'
import { IProductSearchInputSchema } from '../schema/productSearchInputSchema'
import { fetchSearchInputProducts } from '../services/fetchSearchInputProducts'

const initialState: IProductSearchInputSchema = {
    totalСount: 0,
    products: [],
    loading: false,
    error: '',
}

const productSearchInputSlice = createSlice({
    name: 'productSearchInputSlice',
    initialState,
    reducers: {
        resetState(state) {
            state.products = []
            state.totalСount = 0
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSearchInputProducts.fulfilled, (state, action) => {
                state.products = action.payload.products
                state.totalСount = action.payload.totalСount
                state.loading = false
                state.error = ''
            })
            .addCase(fetchSearchInputProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSearchInputProducts.rejected, (state, action) => {
                state.products = []
                state.loading = false
                state.error = action.error
            })
    },
})
export const { resetState } = productSearchInputSlice.actions
export const productSearchInputReducer = productSearchInputSlice.reducer
