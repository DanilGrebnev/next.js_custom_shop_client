import { StateSchema } from '@/app/providers/StoreProvider'

export const getPreviewItemsOnPage = (state: StateSchema) => {
    return state.productListPagination.previewItemsOnPage
}
