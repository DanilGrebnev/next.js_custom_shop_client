import { FC } from 'react'
import { CardWrapper } from '@/shared/ui/Cards'
import clsx from 'clsx'
import s from './CardByFutureCategories.module.scss'
import Image from 'next/image'

interface ICardByFutureCategoriesProps {
    className?: string
    title: string
    img: any
    amount: number
}

export const CardByFutureCategories: FC<ICardByFutureCategoriesProps> = (
    props
) => {
    const { amount, img, title, className } = props

    return (
        <CardWrapper
            width="full"
            className={clsx(s.card, className)}>
            <div className={s['img-wrapper']}>
                <Image
                    alt={title}
                    src={img}
                    fill={true}
                />
            </div>
            <p>
                {title} ({amount})
            </p>
        </CardWrapper>
    )
}
