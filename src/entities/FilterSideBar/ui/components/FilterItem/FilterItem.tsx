import { type FC } from 'react'
import clsx from 'clsx'
import s from './FilterItem.module.scss'

interface IFilterItemProps {
    className?: string
}

export const FilterItem: FC<IFilterItemProps> = (props) => {
    const { className } = props

    return <div className={clsx(s.FilterItem, className)}></div>
}

FilterItem.displayName = 'FilterItem'
