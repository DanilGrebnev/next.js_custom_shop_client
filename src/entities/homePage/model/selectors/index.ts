import { StateSchema } from '@/app/providers/StoreProvider'

export class HomePageSelectors {
    static getHomePageData(state: StateSchema) {
        return state.homePage
    }
    static getIsLoadingHomePage(state: StateSchema) {
        return state.homePage.loading
    }
    static getIsErrorHomePage(state: StateSchema) {
        return state.homePage.error
    }
}
