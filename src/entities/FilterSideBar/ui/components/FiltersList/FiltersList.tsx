import { type FC, memo, useState, useCallback, ChangeEvent } from 'react'
import { IFilterItem } from '@/app/types/filters'
import { RangeFilter } from '@/shared/ui/RangeFilter'
import { v4 } from 'uuid'
import { FilterListItem } from '../FilterListItem/FilterListItem'

interface IFilterListProps {
    filters: IFilterItem[]
}

export const FiltersList: FC<IFilterListProps> = memo((props) => {
    const { filters } = props

    return (
        <>
            {filters?.map((filterItem) => {
                if (filterItem.type === 'number') {
                    return (
                        <div
                            key={v4()}
                            id={'Filter-Sidebar__' + filterItem.code}>
                            <h2>{filterItem.label} &#8381;</h2>
                            <RangeFilter
                                onChange1={() => {}}
                                onChange2={() => {}}
                                filterItem={filterItem}
                            />
                        </div>
                    )
                }

                return (
                    <FilterListItem
                        key={v4()}
                        filterItem={filterItem}
                    />
                )
            })}
        </>
    )
})

FiltersList.displayName = 'FiltersList'
