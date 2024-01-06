import { FC, ChangeEvent, memo, useState, ReactNode, useEffect } from 'react'

import clsx from 'clsx'
import s from './CheckBox.module.scss'

interface ICheckBoxProps {
    className?: string
    label: ReactNode
    name: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox: FC<ICheckBoxProps> = memo((props) => {
    const { className, name, value, label, onChange } = props

    return (
        <label className={clsx(s.CheckBox, className)}>
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
            />
            <span>{label}</span>
        </label>
    )
})

CheckBox.displayName = 'CheckBox'
