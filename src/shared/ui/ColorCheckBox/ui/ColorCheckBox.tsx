'use client'

import { FC, ChangeEvent, useState, memo } from 'react'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'
import s from './ColorCheckBox.module.scss'

interface IColorCheckBoxProps {
    color?: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

export const ColorCheckBox: FC<IColorCheckBoxProps> = (props) => {
    const { color, onChange, value, name } = props
    // const [checked, setChecked] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        // setChecked((prev) => !prev)
        // console.log(checked)
    }

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: color }}>
            <input
                // checked={checked}
                value={value}
                name={name}
                type="checkbox"
                onChange={onInputChange}
            />
            <div className={s.circle}></div>

            <div className={s.icon}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
}

ColorCheckBox.displayName = 'ColorCheckBox'
