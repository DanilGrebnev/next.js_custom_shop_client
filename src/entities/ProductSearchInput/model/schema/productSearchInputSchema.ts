import { IProduct } from '@/app/types/Product'

export interface IProductSearchInputSchema {
    totalСount: number
    products: IProduct[]
    loading: boolean
    error: any
}
