export type { RootState, AppDispatch } from './config/storeConfig'
export { type StateSchema } from './config/StateSchema'
export { type ThunkApiConfig } from './config/StateSchema'
import StoreProvider from './ui/StoreProvider'
export default StoreProvider
