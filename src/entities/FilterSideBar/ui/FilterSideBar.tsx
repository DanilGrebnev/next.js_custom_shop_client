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
        <div className={clsx(s.FilterSideBar, className)}>
            {filters?.map((filterItem) => {
                console.log(filterItem)
                return (
                    <div key={v4()}>
                        <h2>{filterItem.label}</h2>
                        <ul className={getClass(filterItem.code)}>
                            {filterItem?.choices?.map((choicesItem) => {
                                return (
                                    <li key={v4()}>
                                        {filterItem.code === 'colors' ? (
                                            <ColorCheckBox
                                                color={choicesItem.label}
                                            />
                                        ) : (
                                            <CheckBox
                                                label={choicesItem.label}
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
    return (
        <div className={clsx(s.FilterSideBar, className)}>
            <div>
                <h2>Filter By category</h2>
                <ul className={clsx(s['category-list'], s['vertical-list'])}>
                    {mock.categoryFilter.map(({ name }, i) => {
                        return (
                            <li key={name}>
                                <CheckBox label={name} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={s['color-filter']}>
                <h2>Filter By Color</h2>
                <ul className={s['color-filter__list']}>
                    {mock.colorFilter.map((props, i) => {
                        return (
                            <li key={i}>
                                <ColorCheckBox color={props.color} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={clsx(s['size-filter'])}>
                <h2>Filter By Size</h2>

                <ul className={s['vertical-list']}>
                    <CheckBox label="Large" />
                    <CheckBox label="Medium" />
                    <CheckBox label="Small" />
                </ul>
            </div>

            <div className={clsx(s['price-filter'])}>
                <h2>Filter By Price</h2>
                <div className={s['filter-by-price__inputs']}>
                    <input
                        defaultValue={priceData.min}
                        max={priceData.max}
                        min={priceData.min}
                        type="number"
                    />
                    <input
                        defaultValue={priceData.max}
                        min={priceData.min}
                        max={priceData.max}
                        type="number"
                    />
                </div>
            </div>
        </div>
    )
}

FilterSideBar.displayName = 'FilterSideBar'