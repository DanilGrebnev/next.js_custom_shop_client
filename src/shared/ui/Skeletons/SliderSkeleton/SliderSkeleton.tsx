'use client'
import { FC, CSSProperties } from 'react'
import { Skeleton } from '@mui/material'
import { SliderCardSkeleton } from '../SliderCardSkeleton/SliderCardSkeleton'
import { ContainerWithTitle } from '../../Containers/ContainerWithTitle'

import clsx from 'clsx'
import s from './SliderSkeleton.module.scss'

interface IindexProps {
    className?: string
    amountSkeletons?: number
    style?: CSSProperties
}

export const SliderSkeleton: FC<IindexProps> = (props) => {
    const { className, amountSkeletons = 7, style } = props

    return (
        <div
            style={style}
            className={clsx(s['wrapper'], className)}>
            <ContainerWithTitle
                title={
                    <Skeleton
                        width={220}
                        height={40}
                        variant="text"
                        animation="wave"
                    />
                }>
                <div className={s['slider-skeleton-wrapper']}>
                    {new Array(amountSkeletons).fill('').map((_, i) => {
                        return (
                            <SliderCardSkeleton
                                key={i}
                                className={s[`skeleton-item-${i + 1}`]}
                            />
                        )
                    })}
                </div>
            </ContainerWithTitle>
        </div>
    )
}

export default SliderSkeleton
