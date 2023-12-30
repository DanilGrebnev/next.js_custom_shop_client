import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    usp: '',
}

export const searchProductParamsSlice = createSlice({
    name: 'searchProductParams',
    initialState,
    reducers: {
        setUrl(state, action: PayloadAction<string>) {
            state.usp = action.payload
        },
    },
})

export const searchProductParamsReducer = searchProductParamsSlice.reducer
export const searchProductParamsActions = searchProductParamsSlice.actions
