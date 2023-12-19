import { IProductListSchema } from './../types/productListSchema'
import { fetchProductList } from '../services/productListServices'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IProductListSchema = {
    total_count: 0,
    products: [],
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        return builder
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.products = action.payload.products
                if (state.total_count !== action.payload.total_count) {
                    state.total_count = action.payload.total_count
                }
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                console.error(action.error)
            })
    },
})

export const productListReducer = productListSlice.reducer
