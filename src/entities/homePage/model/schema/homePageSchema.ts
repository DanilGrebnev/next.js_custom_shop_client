import { IImage, IProduct } from '@/app/types/Product'
import { IComment } from '@/app/types/comments'
import { ICategory } from '@/app/types/category'

export interface IHomePageSchema {
    homePageData: {
        featureProducts: IProduct[]
        newProducts: IProduct[]
        bestsellerProducts: IProduct[]
        featuredCategories: ICategory[]
        comments: IComment[]
        sliderImages: IImage[]
    }
    loading: boolean
    error?: any
}
