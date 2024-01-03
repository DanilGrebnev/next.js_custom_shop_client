'use client'

import { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { fetchSidebarFilters } from '../model/services/fetchSidebarFilters'
import { useAppSelector } from '@/shared/hooks'
import { useAppDispatch } from '@/shared/hooks'
import { FilterSideBarSelector } from '../model/selectors/filterSideBarSelector'
import { FilterList } from './components/FilterList/FilterList'
import {
    getSearchProductParams,
    searchProductParamsActions,
} from '@/entities/searchProductParams'
import { FilterSideBarSkeleton } from '@/shared/ui/Skeletons/FilterSideBarSkeleton'
// import mock from '@/mock/mock'
import clsx from 'clsx'
import s from './FilterSideBar.module.scss'

interface IFilterSideBarProps {
    className?: string
}

const priceData = {
    min: 30,
    max: 250,
}

export const FilterSideBar: FC<IFilterSideBarProps> = (props) => {
    const { className } = props
    const filters = useAppSelector(FilterSideBarSelector.getFilters)
    const isLoading = useAppSelector(FilterSideBarSelector.getIsLoading)
    const searchParams = useAppSelector(getSearchProductParams)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSidebarFilters())
    }, [])

    let usp = new URLSearchParams(searchParams)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name

        if (e.target.checked) {
            usp.append(name, value)
        } else {
            // Таким образом удаляем нужную пару ключ=значение из usp
            const filter = name + '=' + value
            const updateUsp = usp.toString().replace(filter, '')
            usp = new URLSearchParams(updateUsp)
        }
        dispatch(searchProductParamsActions.setUSP(usp.toString()))
    }, [])

    return (
        <div
            id="Filter-Sidebar"
            className={clsx(s.FilterSideBar, className)}>
            {isLoading && <FilterSideBarSkeleton />}
            <FilterList
                onChange={onChange}
                filters={filters}
            />
        </div>
    )
}

FilterSideBar.displayName = 'FilterSideBar'
