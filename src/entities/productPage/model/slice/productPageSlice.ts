import { createSlice } from '@reduxjs/toolkit'
import { IProductPageSchema } from '../schema/productPageSchema'

const initialState: IProductPageSchema = {
    id: 0,
    createdAt: '',
    updatedAt: '',
    name: '',
    slug: '',
    description: '',
    price: 0,
    quantity: 0,
    isPublished: false,
    available: false,
    category: [],
    color: '',
    images: [],
    averageRating: 0,
    numberOfRatings: 0,
    loading: false,
    error: {},
}

const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {},
})

export const productPageReducer = productPageSlice.reducer
