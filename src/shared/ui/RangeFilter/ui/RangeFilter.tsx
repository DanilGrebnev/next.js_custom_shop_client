import { type FC } from 'react'

import clsx from 'clsx'
import s from './RangeFilter.module.scss'

interface IRangeFilterProps {
    className?: string
}

export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <input type="number" />
            <input type="number" />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
