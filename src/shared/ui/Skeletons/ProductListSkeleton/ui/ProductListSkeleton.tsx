import { type FC } from 'react'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'
import { SliderCardSkeleton } from '../../SliderCardSkeleton/SliderCardSkeleton'

import s from './ProductListSkeleton.module.scss'

interface IProductListSkeletonProps {
    className?: string
}

export const ProductListSkeleton: FC<IProductListSkeletonProps> = (props) => {
    const { className } = props

    return (
        <CreateArrayAndFill amount={12}>
            <div className={s['skeleton-item']}>
                <SliderCardSkeleton />
            </div>
        </CreateArrayAndFill>
    )
}

ProductListSkeleton.displayName = 'ProductListSkeleton'
