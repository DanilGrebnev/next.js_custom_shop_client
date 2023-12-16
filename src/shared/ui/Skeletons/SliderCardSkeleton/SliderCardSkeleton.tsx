import { FC } from 'react'
import clsx from 'clsx'
import Skeleton from '@mui/material/Skeleton'

import s from './SliderCardSkeleton.module.scss'

interface ISliderCardSkeleton {
    className?: string
}

export const SliderCardSkeleton: FC<ISliderCardSkeleton> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.SliderCardSkeleton, className)}>
            <Skeleton
                variant="rounded"
                animation="wave"
                height={180}
            />
            <Skeleton
                animation="wave"
                variant="text"
                height={50}
            />
            <Skeleton
                animation="wave"
                variant="text"
                height={20}
            />
            <Skeleton
                animation="wave"
                variant="text"
                height={20}
            />
        </div>
    )
}
