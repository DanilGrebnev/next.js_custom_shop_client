import { IProduct } from '@/app/types/Product'

export interface IProductListSchema {
    total_count: number
    products: IProduct[]
}
