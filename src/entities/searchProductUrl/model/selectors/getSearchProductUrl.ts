import { StateSchema } from '@/app/providers/StoreProvider'

export const getSearchProductUrl = (state: StateSchema) => {
    return state.searchProductUrl.url
}
