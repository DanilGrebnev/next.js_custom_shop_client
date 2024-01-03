import { IProductListSchema } from './../types/productListSchema'
import { fetchProductList } from '../services/productListServices'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IProductListSchema = {
    totalCount: 0,
    products: [],
    loading: true,
    error: '',
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        return builder
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.products = action.payload.products

                if (state.totalCount !== action.payload.totalCount) {
                    state.totalCount = action.payload.totalCount
                }
                state.loading = false
                state.error = ''
            })
            .addCase(fetchProductList.pending, (state) => {
                state.loading = true
                state.products = []
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
                console.error(action.error)
            })
    },
})

export const productListReducer = productListSlice.reducer
