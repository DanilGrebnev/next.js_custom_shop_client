import { IProduct } from '@/app/types/Product'
import { IComment } from '@/app/types/comments'
import { ICategory } from '@/app/types/category'

export interface IHomePageSchema {
    featureProducts: IProduct[]
    newProducts: IProduct[]
    bestsellerProducts: IProduct[]
    featuredCategories: ICategory[]
    comments: IComment[]
    loading: boolean
    error?: any
}
