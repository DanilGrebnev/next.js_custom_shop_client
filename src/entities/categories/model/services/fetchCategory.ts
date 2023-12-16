import { ThunkApiConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { Category } from '../types'

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi as GetThunkAPI<
            ThunkApiConfig<any>
        >

        try {
            const res = await extra.api.get<Category[]>('categories')
            return res.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
