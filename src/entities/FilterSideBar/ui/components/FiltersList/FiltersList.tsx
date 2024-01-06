import { type FC, memo } from 'react'
import { IFilterItem } from '@/app/types/filters'
import { FilterListItem } from '../FilterListItem/FilterListItem'
import { FilterRangeItem } from '../FilterRangeItem/FilterRangeItem'
import { v4 } from 'uuid'

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
                        <FilterRangeItem
                            key={v4()}
                            filterItem={filterItem}
                        />
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
