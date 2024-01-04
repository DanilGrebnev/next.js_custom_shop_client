import { $axios } from '@/app/API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProductSearchInputSchema } from '../schema/productSearchInputSchema'

type Response = Omit<IProductSearchInputSchema, 'loading' | 'error'>

export const fetchSearchInputProducts = createAsyncThunk(
    'products/fetchSearchInput',
    async (searchString: string) => {
        const response = await $axios.get<Response>(
            'products?search=' + searchString
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
