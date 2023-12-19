import { StateSchema } from '@/app/providers/StoreProvider'

export const getTotalCount = (state: StateSchema) => {
    return state.productList.total_count
}
