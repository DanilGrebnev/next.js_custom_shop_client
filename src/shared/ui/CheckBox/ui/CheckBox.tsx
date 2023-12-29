import { FC, ChangeEvent } from 'react'
import clsx from 'clsx'
import s from './CheckBox.module.scss'

interface ICheckBoxProps {
    className?: string
    label: string
    name: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox: FC<ICheckBoxProps> = (props) => {
    const { className, name, value, onChange, label } = props

    return (
        <label className={clsx(s.CheckBox, className)}>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type="checkbox"
            />
            <a>{label}</a>
        </label>
    )
}

CheckBox.displayName = 'CheckBox'
