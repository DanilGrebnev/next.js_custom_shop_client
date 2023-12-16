'use client'

import { ProductListPreviewType } from '@/app/types/Product'
import { ReactNode, type FC } from 'react'
import { ProductCard } from '@/shared/ui/Cards'
import { IProduct } from '@/app/types/Product'
import { usePreviewTypeProductCardList } from '@/shared/hooks/usePreviewTypeProductCardList'
import { TogglePreviewTypeBar } from './components/TogglePreviewTypeBar'
import s from './ProductList.module.scss'
import clsx from 'clsx'

interface IProductListProps {
    className?: string
    products: IProduct[]
    children?: ReactNode | ReactNode[]
}

export const ProductList: FC<IProductListProps> = (props) => {
    const { className, products } = props

    const { previewType, setCellPreviewType, setRowPreviewType } =
        usePreviewTypeProductCardList()

    return (
        <div className={clsx(s['product-list'], className)}>
            <TogglePreviewTypeBar
                className={s['top-bar']}
                previewType={previewType}
                setRowPreviewType={setRowPreviewType}
                setCellPreviewType={setCellPreviewType}
            />

            <div
                className={clsx(s['product-list__content'], {
                    [s.cell]: previewType === ProductListPreviewType.CELL,
                    [s.list]: previewType === ProductListPreviewType.LIST,
                })}>
                {products.map(({ id, price, images, name, description }) => {
                    return (
                        <ProductCard
                            type={
                                previewType === ProductListPreviewType.CELL
                                    ? ProductListPreviewType.CELL
                                    : ProductListPreviewType.LIST
                            }
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
        </div>
    )
}

export default ProductList

ProductList.displayName = 'ProductList'
