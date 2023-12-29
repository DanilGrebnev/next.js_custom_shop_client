'use client'
import { FC, useEffect } from 'react'
import { CheckBox } from '@/shared/ui/CheckBox'
import { ColorCheckBox } from '@/shared/ui/ColorCheckBox'
import { useAppDispatch } from '@/shared/hooks'
import { fetchSidebarFilters } from '../model/services/fetchSidebarFilters'
import { useAppSelector } from '@/shared/hooks'
import { v4 } from 'uuid'
import mock from '@/mock/mock'
import clsx from 'clsx'

import s from './FilterSideBar.module.scss'
import { FilterSideBarSelector } from '../model/selectors/filterSideBarSelector'
import { getClass } from '../lib/getClass'

interface IFilterSideBarProps {
    className?: string
}

const priceData = {
    min: 30,
    max: 250,
}

export const FilterSideBar: FC<IFilterSideBarProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const filters = useAppSelector(FilterSideBarSelector.getFilters)

    useEffect(() => {
        dispatch(fetchSidebarFilters())
    }, [])

    return (
        <div
            id="Filter-Sidebar"
            className={clsx(s.FilterSideBar, className)}>
            {filters?.map((filterItem) => {
                return (
                    <div
                        id={'Filter-Sidebar__' + filterItem.code}
                        key={v4()}>
                        <h2>{filterItem.label}</h2>
                        <ul className={getClass(filterItem.code)}>
                            {filterItem?.choices?.map((choicesItem) => {
                                return (
                                    <li key={v4()}>
                                        {filterItem.code === 'colors' ? (
                                            <ColorCheckBox
                                                name={filterItem.code}
                                                color={choicesItem.label}
                                                value={choicesItem.value}
                                            />
                                        ) : (
                                            <CheckBox
                                                name={filterItem.code}
                                                label={choicesItem.label}
                                                value={choicesItem.value}
                                            />
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

FilterSideBar.displayName = 'FilterSideBar'
