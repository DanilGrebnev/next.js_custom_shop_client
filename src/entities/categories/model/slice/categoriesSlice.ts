import { createSlice } from '@reduxjs/toolkit'
import { type CategorySchema } from '../types'
import { fetchCategories } from '../services/fetchCategory'

const initialState: CategorySchema = {
    category: [],
    isError: '',
    isLoading: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.category = action.payload
            })
            .addCase(fetchCategories.pending, (state, action) => {})
            .addCase(fetchCategories.rejected, (state, action) => {})
    },
})

export const { reducer: categoryReducer } = categorySlice
