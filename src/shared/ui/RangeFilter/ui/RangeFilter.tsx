import { type FC } from 'react'
import { TextField } from '@mui/material'
import { IFilterItem } from '@/app/types/filters'

import clsx from 'clsx'
import s from './RangeFilter.module.scss'

interface IRangeFilterProps {
    className?: string
    filterItem: IFilterItem
}

export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className, filterItem } = props

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <TextField
                color="success"
                size="small"
                label={`от ${filterItem.min_value}`}
                variant="outlined"
            />
            <TextField
                color="success"
                size="small"
                label={`до ${filterItem.max_value}`}
                variant="outlined"
            />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
