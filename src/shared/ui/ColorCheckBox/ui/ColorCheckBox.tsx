'use client'
import { FC, InputHTMLAttributes, CSSProperties } from 'react'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'
import clsx from 'clsx'
import s from './ColorCheckBox.module.scss'

interface IColorCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    color?: string
}

export const ColorCheckBox: FC<IColorCheckBoxProps> = (props) => {
    const { color, className, ...inputProps } = props

    return (
        <label
            style={{ background: color }}
            className={clsx(s.ColorCheckBox, className)}>
            <input
                {...inputProps}
                type="checkbox"
            />
            <div className={s.circle}></div>

            <div className={s.icon}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
}

ColorCheckBox.displayName = 'ColorCheckBox'
