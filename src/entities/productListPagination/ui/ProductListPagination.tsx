'use client'
import { type FC } from 'react'
import { Pagination } from '@/shared/ui/Pagination'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ProductListSelectors } from '@/entities/productList'
import { fetchProductList } from '@/entities/productList'
import { calculatePagesAmount } from '../model/lib/calculatePagesAmount'
import { calculateOffset } from '../model/lib/calculateOffset'
import { getPreviewItemsOnPage } from '../model/services/getPreviewItemsOnPage'

interface IProductListPaginationProps {
    className?: string
}

export const ProductListPagination: FC<IProductListPaginationProps> = ({
    className,
}) => {
    const dispatch = useAppDispatch()
    // totalCount - Количество товаров, находящееся в productList
    const totalCount = useAppSelector(ProductListSelectors.getTotalCount)
    const previewItemsOnPage = useAppSelector(getPreviewItemsOnPage)

    const pagesAmount = calculatePagesAmount({
        previewItemsOnPage,
        productsAmount: totalCount,
    })

    const onChange = (pageNumber: number) => {
        const offset = calculateOffset({ pageNumber, previewItemsOnPage })

        dispatch(
            fetchProductList({
                limit: previewItemsOnPage,
                offset,
            })
        )
    }

    return (
        <Pagination
            className={className}
            count={pagesAmount}
            onChange={(_, pageNumber) => {
                onChange(pageNumber)
            }}
        />
    )
}

ProductListPagination.displayName = 'ProductListPagination'
