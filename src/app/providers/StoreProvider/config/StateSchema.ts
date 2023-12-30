import { ICategorySchema } from '@/entities/categories'
import { IProductSchema } from '@/entities/product'
import { IProductListSchema } from '@/entities/productList'
import { IHomePageSchema } from '@/entities/homePage'
import { IProductPageSchema } from '@/entities/productPage'
import { IProductListPaginationSchema } from '@/entities/productListPagination'
import { IFilterSideBarSchema } from '@/entities/filterSideBar'
import type { AxiosInstance } from 'axios'
import { IProductSearchInputSchema } from '@/entities/ProductSearchInput'
import { ISearchProductUrlSchema } from '@/entities/searchProductUrl'

export interface StateSchema {
    product: IProductSchema
    categories: ICategorySchema
    productList: IProductListSchema
    homePage: IHomePageSchema
    productPage: IProductPageSchema
    productListPagination: IProductListPaginationSchema
    filterSideBar: IFilterSideBarSchema
    productSearchInput: IProductSearchInputSchema
    searchProductUrl: ISearchProductUrlSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
