import { categoryReducer } from '@/entities/categories'
import { homePageReducer } from '@/entities/homePage'
import { productReducer } from '@/entities/product'
import { productListReducer } from '@/entities/productList'
import { productPageReducer } from '@/entities/productPage'

export const reducerManager = {
    product: productReducer,
    categories: categoryReducer,
    productList: productListReducer,
    homePage: homePageReducer,
    productPage: productPageReducer,
}
