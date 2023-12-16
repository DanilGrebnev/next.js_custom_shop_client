export { categoryReducer } from './model/slice/categoriesSlice'
export { type CategorySchema } from './model/types'
export { CategoryMenuWidget } from './ui/CategoryMenuWidget'
export {
    getCategoryData,
    getCategoryIsError,
    getCategoryIsLoading,
} from './model/selectors'
export { fetchCategories } from './model/services/fetchCategory'
