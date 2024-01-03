import { $axios } from '@/app/API'
import { IProductListSchema } from '../types/productListSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'

interface IFetchProductList {
    offset: number
    limit: number
}

export const fetchProductList = createAsyncThunk(
    'users/fetchByIdStatus',
    async (_, thunkAPI) => {
        const { getState } = thunkAPI

        const state = getState() as StateSchema

        const usp = new URLSearchParams(state.searchProductParams.usp)
        // console.log(usp.toString())
        const response = await $axios.get<IProductListSchema>(
            'products?' + usp.toString()
        )

        response.data.products.map((product) =>
            product.images.map((imageItem) => {
                const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND as string
                const src = backendUrl + imageItem.image

                imageItem.image = src

                return imageItem
            })
        )

        return response.data
    }
)
