import { ChangeEvent, type FC, memo } from 'react'
import { CheckBox } from '@/shared/ui/CheckBox'
import { Rating } from '@/shared/ui/Rating'
import { ColorCheckBox } from '@/shared/ui/ColorCheckBox'
import { getClass } from '../../../lib/getClass'
import { FilterItem } from '../../../model/schema/filterSchema'
import clsx from 'clsx'

import s from '../../FilterSideBar.module.scss'
import { v4 } from 'uuid'

interface IFilterListProps {
    className?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    filters: FilterItem[]
}

export const FilterList: FC<IFilterListProps> = memo((props) => {
    const { className, filters, onChange } = props

    return (
        <>
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
                                                onChange={onChange}
                                                name={filterItem.code}
                                                color={choicesItem.label}
                                                value={choicesItem.value}
                                            />
                                        ) : filterItem.code === 'rating' ? (
                                            <CheckBox
                                                onChange={onChange}
                                                name={filterItem.code}
                                                label={
                                                    <Rating
                                                        rating={
                                                            +choicesItem.value
                                                        }
                                                    />
                                                }
                                                value={choicesItem.value}
                                            />
                                        ) : (
                                            <CheckBox
                                                onChange={onChange}
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
        </>
    )
})

FilterList.displayName = 'FilterList'
