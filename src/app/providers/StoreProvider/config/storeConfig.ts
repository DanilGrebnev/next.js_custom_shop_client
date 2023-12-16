'use client'
import { configureStore } from '@reduxjs/toolkit'
import { reducerManager } from './ReducerManeger'
import { $axios } from '@/app/API'

export const createStore = () => {
    const store = configureStore({
        reducer: reducerManager,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                thunk: {
                    extraArgument: { api: $axios },
                },
            })
        },
    })

    return store
}

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
