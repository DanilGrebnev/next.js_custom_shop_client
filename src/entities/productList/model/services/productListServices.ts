import { $axios } from '@/app/API'
import { IProductListSchema } from '../types/productListSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IFetchProductList {
    offset: number
    limit: number
}

export const fetchProductList = createAsyncThunk(
    'users/fetchByIdStatus',
    async ({ offset, limit }: IFetchProductList) => {
        const searchParams = new URLSearchParams()

        searchParams.set('offset', offset + '')
        searchParams.set('limit', limit + '')

        const response = await $axios.get<IProductListSchema>(
            'products?' + searchParams
        )
        response.data.products.map((product) =>
            product.images.map(
                (image) =>
                    (image.image =
                        (process.env.NEXT_PUBLIC_URL_BACKEND as string) +
                        image.image)
            )
        )

        return response.data
    }
)

export const fetchProductListWithDispatch = () => {}
