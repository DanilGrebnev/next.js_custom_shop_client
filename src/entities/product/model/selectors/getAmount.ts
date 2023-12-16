import { StateSchema } from '@/app/providers/StoreProvider'

export const getAmount = (state: StateSchema) => {
    return state.product.amount
}
