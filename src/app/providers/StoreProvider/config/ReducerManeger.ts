import { categoryReducer } from '@/entities/categories'
import { productReducer } from '@/entities/product'
import { productListReducer } from '@/entities/productList'

export const reducerManager = {
    product: productReducer,
    categories: categoryReducer,
    productList: productListReducer,
}
