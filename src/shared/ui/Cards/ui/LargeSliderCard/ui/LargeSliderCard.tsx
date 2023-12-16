import { FC } from 'react'

import Banner1 from '/public/mock/images/main-banner-1.png'
import Image from 'next/image'
import clsx from 'clsx'

import s from './LargeSliderCard.module.scss'

interface ILargeSliderCardProps {
    className?: string
}

export const LargeSliderCard: FC<ILargeSliderCardProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.LargeSliderCard, className)}>
            <Image
                alt="Banner"
                src={Banner1}
            />
        </div>
    )
}
