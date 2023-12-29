import { StateSchema } from '@/app/providers/StoreProvider'

export const getProducts = (state: StateSchema) => {
    return state.productSearchInput.products
}
