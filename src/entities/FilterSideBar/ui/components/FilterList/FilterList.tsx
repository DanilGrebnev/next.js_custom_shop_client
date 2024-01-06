import { ChangeEvent, type FC, memo } from 'react'
import { CheckBox } from '@/shared/ui/CheckBox'
import { Rating } from '@/shared/ui/Rating'
import { ColorCheckBox } from '@/shared/ui/ColorCheckBox'
import { getClass } from '../../../lib/getClass'
import { IFilterItem } from '@/app/types/filters'
import { v4 } from 'uuid'
import { RangeFilter } from '@/shared/ui/RangeFilter'

interface IFilterListProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    filters: IFilterItem[]
}

export const FilterList: FC<IFilterListProps> = memo((props) => {
    const { filters, onChange } = props

    return (
        <>
            {filters?.map((filterItem) => {
                if (filterItem.type === 'number') {
                    return (
                        <div
                            id={'Filter-Sidebar__' + filterItem.code}
                            key={v4()}>
                            <h2>{filterItem.label} &#8381;</h2>
                            <RangeFilter filterItem={filterItem} />
                        </div>
                    )
                }

                return (
                    <div
                        id={'Filter-Sidebar__' + filterItem.code}
                        key={v4()}>
                        <h2>{filterItem.label}</h2>

                        <ul className={getClass(filterItem.code)}>
                            {filterItem?.choices?.map((choicesItem) => {
                                return (
                                    <li key={v4()}>
                                        {filterItem.code === 'color' ? (
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
