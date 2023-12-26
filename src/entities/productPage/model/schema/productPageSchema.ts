import { IProduct } from '@/app/types/Product'

export interface IProductPageSchema extends IProduct {
    loading: boolean
    error: any
}
