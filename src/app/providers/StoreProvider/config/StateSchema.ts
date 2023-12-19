import { ICategorySchema } from '@/entities/categories'
import { IProductSchema } from '@/entities/product'
import type { AxiosInstance } from 'axios'
import { IProductListSchema } from '@/entities/productList'

export interface StateSchema {
    product: IProductSchema
    categories: ICategorySchema
    productList: IProductListSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
