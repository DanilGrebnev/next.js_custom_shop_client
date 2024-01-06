import { type FC } from 'react'
import { IFilterItem } from '@/app/types/filters'

import { RangeFilter } from '@/shared/ui/RangeFilter'

interface IFilterRangeItemProps {
    filterItem: IFilterItem
}

export const FilterRangeItem: FC<IFilterRangeItemProps> = (props) => {
    const { filterItem } = props

    return (
        <div id={'Filter-Sidebar__' + filterItem.code}>
            <RangeFilter
                onChange1={() => {}}
                onChange2={() => {}}
                filterItem={filterItem}
            />
        </div>
    )
}

FilterRangeItem.displayName = 'FilterRangeItem'
