'use client'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { fetchProductList } from '../../model/services/productListServices'
import { ProductCard } from '@/shared/ui/Cards'
import { Pagination } from '@/shared/ui/Pagination'
import { getProducts } from '../../model/selectors/getProducts'
import { getTotalCount } from '../../model/selectors/getTotalCount'

import clsx from 'clsx'
import s from './ProductList.module.scss'

const ProductList = () => {
    const products = useAppSelector(getProducts)
    const productsAmount = useAppSelector(getTotalCount)
    const dispatch = useAppDispatch()

    const previewOnPage = 8

    function getPagesAmount(previewItems: number) {
        const pagesAmount = productsAmount / previewItems

        return pagesAmount % 0 !== 1 ? Math.ceil(pagesAmount) : pagesAmount
    }

    const onChange = (pageNumber: number) => {
        const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * previewOnPage

        dispatch(
            fetchProductList({
                limit: previewOnPage,
                offset,
            })
        )
    }

    useEffect(() => {
        dispatch(fetchProductList({ limit: previewOnPage, offset: 0 }))
    }, [])

    return (
        <div className={clsx(s['product-list'])}>
            {/* <TogglePreviewTypeBar
                className={s['top-bar']}
                previewType={previewType}
                setRowPreviewType={setRowPreviewType}
                setCellPreviewType={setCellPreviewType}
            /> */}

            <div
                className={clsx(s['product-list__content'], s.cell, {
                    // [s.cell]: previewType === ProductListPreviewType.CELL,
                    // [s.list]: previewType === ProductListPreviewType.LIST,
                })}>
                {products?.map(({ id, price, images, name, description }) => {
                    return (
                        <ProductCard
                            type={'cell'}
                            key={id}
                            productId={id}
                            rating={3}
                            images={images}
                            name={name}
                            price={price}
                            description={description}
                        />
                    )
                })}
            </div>
            <Pagination
                count={getPagesAmount(previewOnPage)}
                onChange={(_, value) => {
                    onChange(value)
                }}
            />
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
