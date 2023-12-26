import { createSlice } from '@reduxjs/toolkit'
import { IHomePageSchema } from '../schema/homePageSchema'
import { fetchHomePageData } from '../services/fetchHomePageData'

const initialState: IHomePageSchema = {
    bestsellerProducts: [],
    featuredCategories: [],
    featureProducts: [],
    newProducts: [],
    comments: [],
    loading: true,
    error: {},
}

const homePageSlice = createSlice({
    name: 'homePageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomePageData.fulfilled, (state, action) => {
                state.bestsellerProducts = action.payload.bestsellerProducts
                state.featureProducts = action.payload.featureProducts
                state.newProducts = action.payload.newProducts
                state.featuredCategories = action.payload.featuredCategories
                state.comments = action.payload.comments

                state.loading = false
            })
            .addCase(fetchHomePageData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    },
})

export const homePageReducer = homePageSlice.reducer
