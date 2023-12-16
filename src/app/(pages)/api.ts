import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/Product'

interface HomePageData {
    feature_products: IProduct[]
    new_products: IProduct[]
    bestseller_products: IProduct[]
    featured_categories: ICategories[]
}

export interface ICategories {
    id: number
    name: string
    slug: string
    image: string
}

export const fetchHomePageData = async () => {
    const res = await $axios.get<HomePageData>('home_page')

    return res.data
}
