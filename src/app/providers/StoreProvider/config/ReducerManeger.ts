import { productSearchInputReducer } from '@/entities/ProductSearchInput/model/slice/productSearchInputSlice'
import { categoryReducer } from '@/entities/categories'
import { filterSidebarReducer } from '@/entities/filterSideBar'
import { homePageReducer } from '@/entities/homePage'
import { productReducer } from '@/entities/product'
import { productListReducer } from '@/entities/productList'
import { productListPaginationReducer } from '@/entities/productListPagination'
import { productPageReducer } from '@/entities/productPage'
import { searchProductUrlReducer } from '@/entities/searchProductUrl'

export const reducerManager = {
    product: productReducer,
    categories: categoryReducer,
    productList: productListReducer,
    homePage: homePageReducer,
    productPage: productPageReducer,
    productListPagination: productListPaginationReducer,
    filterSideBar: filterSidebarReducer,
    productSearchInput: productSearchInputReducer,
    searchProductUrl: searchProductUrlReducer,
}
