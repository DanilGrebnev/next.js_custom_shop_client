'use client'

import { type FC, useState, ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import { IFilterItem } from '@/app/types/filters'
import { isNumber } from '@/shared/lib/isNumber'
import { useAppDispatch } from '@/shared/hooks'

import clsx from 'clsx'
import s from './RangeFilter.module.scss'

type Event = ChangeEvent<HTMLInputElement>

interface IRangeFilterProps {
    className?: string
    filterItem: IFilterItem
    onChange1: (e: ChangeEvent<HTMLInputElement>) => void
    onChange2: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Компонент фильтра диапазона
 */
export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className, filterItem, onChange1, onChange2 } = props
    const dispatch = useAppDispatch()

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const key1 = filterItem.code + '_min'
    const key2 = filterItem.code + '_max'

    const onChangeValue1 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        setInput1(value)
        onChange1?.(e)
    }

    const onChangeValue2 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        setInput2(value)
        onChange2?.(e)
    }

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <TextField
                color="success"
                size="small"
                name={key1}
                value={input1}
                onChange={onChangeValue1}
                label={`от ${filterItem.min_value}`}
                variant="outlined"
            />
            <TextField
                color="success"
                name={key2}
                value={input2}
                onChange={onChangeValue2}
                size="small"
                label={`до ${filterItem.max_value}`}
                variant="outlined"
            />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
