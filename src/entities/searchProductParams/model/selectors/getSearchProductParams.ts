import { StateSchema } from '@/app/providers/StoreProvider'

export const getSearchProductParams = (state: StateSchema) => {
    return state.searchProductParams.usp
}
