import { IHomePageSchema } from './../schema/homePageSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'

type TFetchHomePageDataResponse = Omit<IHomePageSchema, 'loading' | 'error'>

export const fetchHomePageData = createAsyncThunk(
    'homePage/fetchData',
    async () => {
        const response = await $axios.get<TFetchHomePageDataResponse>(
            'home_page'
        )

        return response.data
    }
)
