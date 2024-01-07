import { InputHTMLAttributes, type FC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { setInput } from '../../model/slice/productSearchInputSlice'
import { ProductSearchInputState } from '../../model/selectors/ProductSearchInputState'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = (props) => {
    const { className, onChange, ...otherProps } = props
    const dispatch = useAppDispatch()
    const value = useAppSelector(ProductSearchInputState.getInput)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setInput(e.target.value))
        onChange?.(e)
    }

    return (
        <input
            {...otherProps}
            onChange={onInputChange}
            value={value}
            className={className}
        />
    )
}

Input.displayName = 'Input'
