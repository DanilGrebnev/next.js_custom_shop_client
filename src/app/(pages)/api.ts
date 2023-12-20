import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/Product'
import { ICategory } from '@/app/types/categoryTypes'

interface HomePageData {
    featureProducts: IProduct[]
    newProducts: IProduct[]
    bestsellerProducts: IProduct[]
    featuredCategories: ICategory[]
}

export const fetchHomePageData = async () => {
    const res = await $axios.get<HomePageData>('home_page')

    return res.data
}
