import { ReactNode, type FC, Fragment } from 'react'
import { v4 } from 'uuid'

interface ICreateArrayAndFillProps {
    children: ReactNode
    amount: number
    className?: string
}

/**
 * Компонент высшего порядка принимает children
 * и возвращает его amount раз, аналогично конструкции
 * new Array(amount).fill('').map(()=> children)
 * @param amount
 * @param children
 * @returns
 */
export const CreateArrayAndFill: FC<ICreateArrayAndFillProps> = (props) => {
    const { amount, children, className } = props

    return (
        <>
            {new Array(amount).fill('').map((_, i) => {
                return className ? (
                    <div
                        key={v4()}
                        className={className + '-' + i}>
                        {children}
                    </div>
                ) : (
                    <Fragment key={v4()}>{children}</Fragment>
                )
            })}
        </>
    )
}

CreateArrayAndFill.displayName = 'CreateArrayAndFill'
