import {
    getSearchProductParams,
    searchProductParamsActions,
} from '@/entities/searchProductParams'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ChangeEvent, useCallback } from 'react'

export const useOnChangeListFilter = () => {
    const dispatch = useAppDispatch()
    const searchParams = useAppSelector(getSearchProductParams)

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            const name = e.target.name

            if (e.target.checked) {
                const usp = new URLSearchParams(searchParams)
                usp.append(name, value)
                dispatch(searchProductParamsActions.setUSP(usp.toString()))
            } else {
                const filter = name + '=' + value
                dispatch(
                    searchProductParamsActions.deleteParamsBySubstring(filter)
                )
            }
        },
        [dispatch, searchParams]
    )

    return onChange
}
