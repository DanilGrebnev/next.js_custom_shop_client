import { StateSchema } from '@/app/providers/StoreProvider'

export class FilterSideBarSelector {
    static getFilters(state: StateSchema) {
        return state.filterSideBar.filters
    }

    static getIsLoading(state: StateSchema) {
        state.filterSideBar.loading
    }
    static getError(state: StateSchema) {
        state.filterSideBar.error
    }
}
