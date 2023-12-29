'use client'

import { FC, InputHTMLAttributes, CSSProperties, ChangeEvent } from 'react'
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

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: color }}>
            <input
                value={value}
                name={name}
                type="checkbox"
                onChange={onChange}
            />
            <div className={s.circle}></div>

            <div className={s.icon}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
}

ColorCheckBox.displayName = 'ColorCheckBox'
