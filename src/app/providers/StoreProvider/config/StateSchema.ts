import { CategorySchema } from '@/entities/categories'
import { ProductSchema } from '@/entities/product'
import type { AxiosInstance } from 'axios'

export interface StateSchema {
    product: ProductSchema
    categories: CategorySchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
