import { categoryReducer } from '@/entities/categories'
import { productReducer } from '@/entities/product'

export const reducerManager = {
    product: productReducer,
    categories: categoryReducer,
}
