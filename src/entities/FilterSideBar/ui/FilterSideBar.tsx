import { FC } from 'react'
import { CheckBox } from '@/shared/ui/CheckBox'
import { ColorCheckBox } from '@/shared/ui/ColorCheckBox'

import mock from '@/mock/mock'
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

    return (
        <div className={clsx(s.FilterSideBar, className)}>
            <div className={clsx(s['category-filter'])}>
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
