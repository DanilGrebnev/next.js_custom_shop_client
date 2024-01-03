'use client'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { fetchProductList } from '../../model/services/productListServices'
import { ProductCard } from '@/shared/ui/Cards'
import { Pagination } from '@/shared/ui/Pagination'
import { ProductListSelectors } from '../../model/selectors/productListSelectors'
import { ProductListPagination } from '@/entities/productListPagination'
import { ProductListSkeleton, ProductCardSkeleton } from '@/shared/ui/Skeletons'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'

import clsx from 'clsx'
import s from './ProductList.module.scss'

const ProductList = () => {
    const products = useAppSelector(ProductListSelectors.getProducts)
    const productsAmount = useAppSelector(ProductListSelectors.getTotalCount)
    const isLoading = useAppSelector(ProductListSelectors.getIsLoading)

    const dispatch = useAppDispatch()

    const previewOnPage = 8

    useEffect(() => {
        dispatch(fetchProductList())
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
                {isLoading && <ProductListSkeleton />}

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
            <ProductListPagination />
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
