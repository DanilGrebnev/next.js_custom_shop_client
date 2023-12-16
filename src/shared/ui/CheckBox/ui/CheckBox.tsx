import { FC, CSSProperties, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import s from './CheckBox.module.scss'

interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label: string
    style?: CSSProperties
}

export const CheckBox: FC<ICheckBoxProps> = (props) => {
    const { className, style, label, ...inputProps } = props

    return (
        <div className={clsx(s.CheckBox, className)}>
            <label style={style}>
                <input
                    {...inputProps}
                    type="checkbox"
                />
                <a>{label}</a>
            </label>
        </div>
    )
}

CheckBox.displayName = 'CheckBox'
