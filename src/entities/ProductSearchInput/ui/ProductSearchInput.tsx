'use client'

import { ChangeEvent, FC, useEffect, useState, useCallback } from 'react'
import { fetchSearchInputProducts } from '../model/services/fetchSearchInputProducts'
import { useAppDispatch } from '@/shared/hooks'
import { resetState } from '../model/slice/productSearchInputSlice'
import { useAppSelector } from '@/shared/hooks'
import { getProducts } from '../model/selectors/getProducts'
import { InputSearchProductList } from '@/shared/ui/InputSearchProductList'
import { debounce } from '@/shared/lib/debounce'
import { usePathname } from 'next/navigation'
import {
    getSearchProductParams,
    searchProductParamsActions,
} from '../../searchProductParams'

import s from './ProductSearchInput.module.scss'
import clsx from 'clsx'
import { useOnChangeForShopPage } from '../model/hooks/useOnChangeForShopPage'

type Event = ChangeEvent<HTMLInputElement>

interface ProductSearchInputProps {
    className?: string
}

export const ProductSearchInput: FC<ProductSearchInputProps> = (props) => {
    const { className } = props

    const [openList, setOpenList] = useState(false)
    const products = useAppSelector(getProducts)
    const pathname = usePathname()
    const dispatch = useAppDispatch()

    const onChangeForShopPage = useOnChangeForShopPage()

    const onChange = debounce((e: Event) => {
        const value = e.target.value.trim()

        if (pathname === '/shop') {
            onChangeForShopPage(value)
            return
        }

        if (!value) {
            return dispatch(resetState())
        }

        dispatch(fetchSearchInputProducts(value))
    }, 1000)

    const onClose = useCallback(() => {
        setOpenList(false)
    }, [])

    useEffect(() => {
        products.length && setOpenList(true)
        !products.length && setOpenList(false)
    }, [products])

    return (
        <div className={clsx(s['product-search-input'], className)}>
            <input
                onChange={onChange}
                placeholder="Search products..."
            />

            {openList && (
                <InputSearchProductList
                    onClick={onClose}
                    products={products}
                />
            )}
        </div>
    )
}
